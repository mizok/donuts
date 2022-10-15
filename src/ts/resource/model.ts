interface Source {
    name: string,
    type: string,
    paths?: string[],
    path?: string
}

export const modelSources: Source[] = [
    {
        name: 'donutsModel',
        type: 'gltfModel',
        path: '../static/donuts/donuts.gltf'
    }
]
