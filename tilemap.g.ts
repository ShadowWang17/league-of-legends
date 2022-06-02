// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010001000000000000000000000000000000010101010100000100000101010000000000000001010101010000000001010000000100000000010101000000010000000101010000000101000000010000000000010201000001000000010100000100000100000100000001010100000101010001010000010101010000000000010000010000010000000000010101000001000000010100000101010000000100000100010101000001000000010000010000010101010000010001010001000001000001010100000100000000000100000100000101000001010101010101010000010000010000000000000000000000000001000000`, img`
2 2 2 2 2 2 2 2 . 2 . . . . . . 
. . . . . . . . . 2 2 2 2 2 . . 
2 . . 2 2 2 . . . . . . . 2 2 2 
2 2 . . . . 2 2 . . . 2 . . . . 
2 2 2 . . . 2 . . . 2 2 2 . . . 
2 2 . . . 2 . . . . . 2 . 2 . . 
2 . . . 2 2 . . 2 . . 2 . . 2 . 
. . 2 2 2 . . 2 2 2 . 2 2 . . 2 
2 2 2 . . . . . 2 . . 2 . . 2 . 
. . . . 2 2 2 . . 2 . . . 2 2 . 
. 2 2 2 . . . 2 . . 2 . 2 2 2 . 
. 2 . . . 2 . . 2 . . 2 2 2 2 . 
. 2 . 2 2 . 2 . . 2 . . 2 2 2 . 
. 2 . . . . . 2 . . 2 . . 2 2 . 
. 2 2 2 2 2 2 2 2 . . 2 . . 2 . 
. . . . . . . . . . . . 2 . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
