import { textureSources } from './textures';
import { modelSources } from './model';
import { TextureLoader, CubeTextureLoader } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface SourceObj {
	name: string,
	content: any
}

const gltfLoader = new GLTFLoader();
const textureLoader = new TextureLoader();
const cubeTextureLoader = new CubeTextureLoader();

const getTexture = (source: any) => {
	const prm: Promise<SourceObj> = new Promise((res, rej) => {
		textureLoader.load(
			source.path,
			(texture) => {
				res({
					name: source.name,
					content: texture
				});
			},
			null,
			rej
		);
	});
	return prm;
};

const getCubeTexture = (source: any) => {
	const prm: Promise<SourceObj> = new Promise((res, rej) => {
		cubeTextureLoader.load(
			source.paths,
			(texture) => {
				res({
					name: source.name,
					content: texture
				});
			},
			null,
			rej
		);
	});
	return prm;
}

const getGltf = (source: any) => {
	const prm: Promise<SourceObj> = new Promise((res, rej) => {
		gltfLoader.load(
			source.path,
			(model) => {
				res({
					name: source.name,
					content: model
				});
			},
			null,
			rej
		);
	});
	return prm;
}

export const getResources = () => {

	const promiseArr: Promise<SourceObj>[] = [];

	const sources = [...textureSources, ...modelSources];

	for (let source of sources) {
		switch (source.type) {
			case 'cubeTexture': promiseArr.push(getCubeTexture(source));
				break;
			case 'texture': promiseArr.push(getTexture(source));
				break;
			case 'gltfModel': promiseArr.push(getGltf(source));
				break;
		}
	}

	return Promise.all(promiseArr).then((values) => {
		const result: {
			[key: string]: any
		} = {};
		values.forEach((sourceObj) => {
			result[sourceObj.name] = sourceObj.content;
		})
		return result;
	})
}


