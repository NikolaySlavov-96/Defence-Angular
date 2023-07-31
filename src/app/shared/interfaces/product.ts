export interface IProduct {
    _id: string,
    img: string,
    articul: string,
    mark: string,
    model: string,
    release: string,
    description: string,
    createAt: string,
    owner: { username: string },
    isDelete: boolean
}