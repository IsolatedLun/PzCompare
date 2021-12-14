
interface GameObjects {
    "items": object[]
    
    "diffs": []
    "status": "rejected" | "fulfilled" | "idle"
}

interface ObjInpts {
    objA: string,
    objB: string
}

export type { GameObjects, ObjInpts };