const { default: expect } = require("expect");

describe(buildTreeRow, () => {
    test("Build an empty tree row", () => {
        expect(buildTreeRow(0, 0)).toBe('');
    })
    test("Row 0 height 1", () => {
        expect(buildTreeRow(0, 1)).toBe('X');
    })
    test("Row 0 height 2", () => {
        expect(buildTreeRow(0, 2)).toBe(' X');
    })
    test("Row 1 height 2", () => {
        expect(buildTreeRow(1, 2)).toBe('XXX');
    })
});

describe(buildTree, () => {
    test("Assemble tree rows for tree height 3", () => {
        const tree = "  X\n" +
                     " XXX\n" +
                     "XXXXX";
        expect(buildTree(3)).toBe(tree);
    })
});

describe(buildStump, () => {
    test("Build a stump for tree height 0", () => {
        expect(buildStump(0)).toBe("");
    })
    test("Stump for height 1", () => {
        expect(buildStump(1)).toBe("|");
    })
    test("Stump for height 2",() => {
        expect(buildStump(2)).toBe(" |");
    })
    test("Thicker stump for height 10", () => {
        expect(buildStump(10)).toBe(" ".repeat(8) + "| |");
    })
});

describe(buildTreeWithStump, () => {
    test("Assemble the tree", () => {
        const tree = "  X\n" +
        " XXX\n" +
        "XXXXX\n" +
        "  |";
        expect(buildTreeWithStump(3)).toBe(tree);
    })
})

//row 0 will give x's equal to 2r + 1
//row 1 will give (height - row - 1 spaces) + 2r - 1 X's
// row 2 will give 2 whitespace + 2r - 3

//a tree of height three would therefore give:

function buildTreeRow(row, height){
    if (height > 0){
        return " ".repeat(height - row - 1) + "X".repeat(2 * row + 1);
    }
    return "";
}

function buildTree(height){
    const result = [];
    for (let i = 0; i < height; i++){
        result.push(buildTreeRow(i, height));
    }
    return result.join("\n");
}

function buildStump(height){
    if (height > 9){
        return " ".repeat(height - 2) + "| |";
    }
    if (height > 0){
        return " ".repeat(height -1) + "|";
    } else {
        return "";
    }
}

function buildTreeWithStump(height){
    return buildTree(height) + "\n" + buildStump(height);
}