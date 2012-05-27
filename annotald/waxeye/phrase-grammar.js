/*
 * Generated by the Waxeye Parser Generator - version 0.8.0
 * www.waxeye.org
 */

var waxeye = waxeye;
if (typeof module !== 'undefined') {
    // require from module system
    waxeye = require('waxeye');
}

var phrase_grammar_parser = (function() {

    var parser = function() { return this; };
    parser.prototype = new waxeye.WaxeyeParser(0, true, [new waxeye.FA("tag", [new waxeye.State([new waxeye.Edge(3, 1, false),
                new waxeye.Edge(13, 3, false),
                new waxeye.Edge(2, 4, false)], false),
            new waxeye.State([new waxeye.Edge(1, 2, false)], true),
            new waxeye.State([], true),
            new waxeye.State([new waxeye.Edge(1, 2, false)], true),
            new waxeye.State([new waxeye.Edge(1, 2, false)], true)], waxeye.FA.LEFT),
        new waxeye.FA("index", [new waxeye.State([new waxeye.Edge("-", 1, false),
                new waxeye.Edge("=", 1, false)], false),
            new waxeye.State([new waxeye.Edge([[48, 57]], 2, false)], false),
            new waxeye.State([new waxeye.Edge([[48, 57]], 2, false)], true)], waxeye.FA.LEFT),
        new waxeye.FA("intermediate", [new waxeye.State([new waxeye.Edge("I", 1, false),
                new waxeye.Edge("A", 3, false),
                new waxeye.Edge("N", 6, false),
                new waxeye.Edge("Q", 7, false),
                new waxeye.Edge("A", 8, false),
                new waxeye.Edge("N", 11, false),
                new waxeye.Edge("Q", 12, false)], false),
            new waxeye.State([new waxeye.Edge("Y", 2, false)], false),
            new waxeye.State([], true),
            new waxeye.State([new waxeye.Edge("D", 4, false)], false),
            new waxeye.State([new waxeye.Edge("J", 5, false)], false),
            new waxeye.State([new waxeye.Edge("Y", 2, false)], false),
            new waxeye.State([new waxeye.Edge("Y", 2, false)], false),
            new waxeye.State([new waxeye.Edge("Y", 2, false)], false),
            new waxeye.State([new waxeye.Edge("D", 9, false)], false),
            new waxeye.State([new waxeye.Edge("J", 10, false)], false),
            new waxeye.State([new waxeye.Edge("X", 2, false)], false),
            new waxeye.State([new waxeye.Edge("X", 2, false)], false),
            new waxeye.State([new waxeye.Edge("X", 2, false)], false)], waxeye.FA.LEFT),
        new waxeye.FA("clause_tag", [new waxeye.State([new waxeye.Edge(5, 1, false),
                new waxeye.Edge(9, 1, false),
                new waxeye.Edge(4, 5, false)], false),
            new waxeye.State([new waxeye.Edge("-", 2, false)], true),
            new waxeye.State([new waxeye.Edge(11, 1, false),
                new waxeye.Edge(12, 3, false)], false),
            new waxeye.State([new waxeye.Edge("-", 4, false)], true),
            new waxeye.State([new waxeye.Edge(12, 3, false)], false),
            new waxeye.State([], true)], waxeye.FA.LEFT),
        new waxeye.FA("other", [new waxeye.State([new waxeye.Edge("F", 1, false),
                new waxeye.Edge("R", 5, false),
                new waxeye.Edge("Q", 7, false)], false),
            new waxeye.State([new waxeye.Edge("R", 2, false)], false),
            new waxeye.State([new waxeye.Edge("A", 3, false)], false),
            new waxeye.State([new waxeye.Edge("G", 4, false)], false),
            new waxeye.State([], true),
            new waxeye.State([new waxeye.Edge("R", 6, false)], false),
            new waxeye.State([new waxeye.Edge("C", 4, false)], false),
            new waxeye.State([new waxeye.Edge("T", 8, false)], false),
            new waxeye.State([new waxeye.Edge("P", 4, false)], false)], waxeye.FA.LEFT),
        new waxeye.FA("ip", [new waxeye.State([new waxeye.Edge("I", 1, false)], false),
            new waxeye.State([new waxeye.Edge("P", 2, false)], false),
            new waxeye.State([new waxeye.Edge("-", 3, false)], true),
            new waxeye.State([new waxeye.Edge(6, 2, false)], false)], waxeye.FA.LEFT),
        new waxeye.FA("ip_dash_tag", [new waxeye.State([new waxeye.Edge("A", 1, false),
                new waxeye.Edge("I", 4, false),
                new waxeye.Edge("M", 9, false),
                new waxeye.Edge("P", 11, false),
                new waxeye.Edge("S", 15, false)], false),
            new waxeye.State([new waxeye.Edge("B", 2, false)], false),
            new waxeye.State([new waxeye.Edge("S", 3, false)], false),
            new waxeye.State([], true),
            new waxeye.State([new waxeye.Edge("M", 5, false),
                new waxeye.Edge("N", 6, false)], false),
            new waxeye.State([new waxeye.Edge("P", 3, false)], false),
            new waxeye.State([new waxeye.Edge("F", 7, false)], false),
            new waxeye.State([new waxeye.Edge("-", 8, false)], true),
            new waxeye.State([new waxeye.Edge(7, 3, false)], false),
            new waxeye.State([new waxeye.Edge("A", 10, false)], false),
            new waxeye.State([new waxeye.Edge("T", 3, false)], false),
            new waxeye.State([new waxeye.Edge("P", 12, false)], false),
            new waxeye.State([new waxeye.Edge("L", 13, false)], false),
            new waxeye.State([new waxeye.Edge("-", 14, false)], true),
            new waxeye.State([new waxeye.Edge(8, 3, false)], false),
            new waxeye.State([new waxeye.Edge("M", 16, false),
                new waxeye.Edge("U", 17, false)], false),
            new waxeye.State([new waxeye.Edge("C", 3, false)], false),
            new waxeye.State([new waxeye.Edge("B", 3, false)], false)], waxeye.FA.LEFT),
        new waxeye.FA("inf_type", [new waxeye.State([new waxeye.Edge("C", 1, false),
                new waxeye.Edge("P", 4, false),
                new waxeye.Edge("S", 6, false),
                new waxeye.Edge("T", 8, false),
                new waxeye.Edge("A", 10, false)], false),
            new waxeye.State([new waxeye.Edge("O", 2, false)], false),
            new waxeye.State([new waxeye.Edge("M", 3, false)], false),
            new waxeye.State([], true),
            new waxeye.State([new waxeye.Edge("R", 5, false)], false),
            new waxeye.State([new waxeye.Edge("P", 3, false)], false),
            new waxeye.State([new waxeye.Edge("B", 7, false)], false),
            new waxeye.State([new waxeye.Edge("J", 3, false)], false),
            new waxeye.State([new waxeye.Edge("H", 9, false)], false),
            new waxeye.State([new waxeye.Edge("T", 3, false)], false),
            new waxeye.State([new waxeye.Edge("B", 11, false)], false),
            new waxeye.State([new waxeye.Edge("S", 3, false)], false)], waxeye.FA.LEFT),
        new waxeye.FA("ppl_type", [new waxeye.State([new waxeye.Edge("C", 1, false),
                new waxeye.Edge("T", 4, false)], false),
            new waxeye.State([new waxeye.Edge("O", 2, false)], false),
            new waxeye.State([new waxeye.Edge("M", 3, false)], false),
            new waxeye.State([], true),
            new waxeye.State([new waxeye.Edge("H", 5, false)], false),
            new waxeye.State([new waxeye.Edge("T", 3, false)], false)], waxeye.FA.LEFT),
        new waxeye.FA("cp", [new waxeye.State([new waxeye.Edge("C", 1, false)], false),
            new waxeye.State([new waxeye.Edge("P", 2, false)], false),
            new waxeye.State([new waxeye.Edge("-", 3, false)], true),
            new waxeye.State([new waxeye.Edge(10, 2, false)], false)], waxeye.FA.LEFT),
        new waxeye.FA("cp_dash_tag", [new waxeye.State([new waxeye.Edge("A", 1, false),
                new waxeye.Edge("C", 4, false),
                new waxeye.Edge("D", 8, false),
                new waxeye.Edge("E", 10, false),
                new waxeye.Edge("F", 13, false),
                new waxeye.Edge("P", 15, false),
                new waxeye.Edge("Q", 17, false),
                new waxeye.Edge("R", 19, false),
                new waxeye.Edge("T", 21, false)], false),
            new waxeye.State([new waxeye.Edge("D", 2, false)], false),
            new waxeye.State([new waxeye.Edge("V", 3, false)], false),
            new waxeye.State([], true),
            new waxeye.State([new waxeye.Edge("A", 5, false),
                new waxeye.Edge("O", 6, false),
                new waxeye.Edge("M", 7, false)], false),
            new waxeye.State([new waxeye.Edge("R", 3, false)], false),
            new waxeye.State([new waxeye.Edge("M", 3, false)], false),
            new waxeye.State([new waxeye.Edge("P", 3, false)], false),
            new waxeye.State([new waxeye.Edge("E", 9, false)], false),
            new waxeye.State([new waxeye.Edge("G", 3, false)], false),
            new waxeye.State([new waxeye.Edge("O", 11, false),
                new waxeye.Edge("X", 12, false)], false),
            new waxeye.State([new waxeye.Edge("P", 3, false)], false),
            new waxeye.State([new waxeye.Edge("L", 3, false)], false),
            new waxeye.State([new waxeye.Edge("R", 14, false)], false),
            new waxeye.State([new waxeye.Edge("L", 3, false)], false),
            new waxeye.State([new waxeye.Edge("R", 16, false)], false),
            new waxeye.State([new waxeye.Edge("P", 3, false)], false),
            new waxeye.State([new waxeye.Edge("U", 18, false)], false),
            new waxeye.State([new waxeye.Edge("E", 3, false)], false),
            new waxeye.State([new waxeye.Edge("E", 20, false)], false),
            new waxeye.State([new waxeye.Edge("L", 3, false),
                new waxeye.Edge("S", 3, false)], false),
            new waxeye.State([new waxeye.Edge("H", 22, false)], false),
            new waxeye.State([new waxeye.Edge("T", 3, false)], false)], waxeye.FA.LEFT),
        new waxeye.FA("ext", [new waxeye.State([new waxeye.Edge("P", 1, false),
                new waxeye.Edge("S", 4, false)], false),
            new waxeye.State([new waxeye.Edge("R", 2, false)], false),
            new waxeye.State([new waxeye.Edge("N", 3, false)], false),
            new waxeye.State([], true),
            new waxeye.State([new waxeye.Edge("P", 5, false)], false),
            new waxeye.State([new waxeye.Edge("E", 3, false)], false)], waxeye.FA.LEFT),
        new waxeye.FA("clause_dash_tag", [new waxeye.State([new waxeye.Edge("S", 1, false)], false),
            new waxeye.State([new waxeye.Edge("B", 2, false)], false),
            new waxeye.State([new waxeye.Edge("J", 3, false)], false),
            new waxeye.State([], true)], waxeye.FA.LEFT),
        new waxeye.FA("phrase_tag", [new waxeye.State([new waxeye.Edge(18, 1, false),
                new waxeye.Edge(14, 1, false),
                new waxeye.Edge(15, 1, false),
                new waxeye.Edge(16, 1, false),
                new waxeye.Edge(17, 1, false),
                new waxeye.Edge(19, 1, false),
                new waxeye.Edge(20, 1, false),
                new waxeye.Edge(21, 1, false)], false),
            new waxeye.State([new waxeye.Edge("-", 2, false)], true),
            new waxeye.State([new waxeye.Edge(11, 1, false)], false)], waxeye.FA.LEFT),
        new waxeye.FA("np", [new waxeye.State([new waxeye.Edge("N", 1, false)], false),
            new waxeye.State([new waxeye.Edge("P", 2, false)], false),
            new waxeye.State([new waxeye.Edge("-", 3, false)], true),
            new waxeye.State([new waxeye.Edge("S", 4, false),
                new waxeye.Edge("O", 13, false),
                new waxeye.Edge("P", 15, false),
                new waxeye.Edge("A", 17, false),
                new waxeye.Edge("P", 19, false),
                new waxeye.Edge("C", 22, false),
                new waxeye.Edge("A", 25, false),
                new waxeye.Edge("D", 28, false),
                new waxeye.Edge("I", 30, false),
                new waxeye.Edge("L", 32, false),
                new waxeye.Edge("M", 34, false),
                new waxeye.Edge("S", 36, false),
                new waxeye.Edge("T", 38, false),
                new waxeye.Edge("V", 40, false),
                new waxeye.Edge("A", 42, false),
                new waxeye.Edge("C", 44, false),
                new waxeye.Edge("R", 8, false),
                new waxeye.Edge("L", 11, false)], false),
            new waxeye.State([new waxeye.Edge("B", 5, false)], false),
            new waxeye.State([new waxeye.Edge("J", 6, false)], false),
            new waxeye.State([new waxeye.Edge("-", 7, false)], true),
            new waxeye.State([new waxeye.Edge("R", 8, false),
                new waxeye.Edge("L", 11, false)], false),
            new waxeye.State([new waxeye.Edge("S", 9, false)], false),
            new waxeye.State([new waxeye.Edge("P", 10, false)], false),
            new waxeye.State([], true),
            new waxeye.State([new waxeye.Edge("F", 12, false)], false),
            new waxeye.State([new waxeye.Edge("D", 10, false)], false),
            new waxeye.State([new waxeye.Edge("B", 14, false)], false),
            new waxeye.State([new waxeye.Edge("1", 6, false),
                new waxeye.Edge("2", 6, false),
                new waxeye.Edge("P", 6, false),
                new waxeye.Edge("Q", 6, false)], false),
            new waxeye.State([new waxeye.Edge("R", 16, false)], false),
            new waxeye.State([new waxeye.Edge("D", 6, false)], false),
            new waxeye.State([new waxeye.Edge("T", 18, false)], false),
            new waxeye.State([new waxeye.Edge("R", 6, false)], false),
            new waxeye.State([new waxeye.Edge("R", 20, false),
                new waxeye.Edge("A", 21, false)], false),
            new waxeye.State([new waxeye.Edge("N", 6, false)], false),
            new waxeye.State([new waxeye.Edge("R", 6, false)], false),
            new waxeye.State([new waxeye.Edge("O", 23, false),
                new waxeye.Edge("M", 24, false)], false),
            new waxeye.State([new waxeye.Edge("M", 6, false)], false),
            new waxeye.State([new waxeye.Edge("P", 6, false)], false),
            new waxeye.State([new waxeye.Edge("D", 26, false),
                new waxeye.Edge("G", 27, false)], false),
            new waxeye.State([new waxeye.Edge("V", 6, false)], false),
            new waxeye.State([new waxeye.Edge("T", 6, false)], false),
            new waxeye.State([new waxeye.Edge("I", 29, false)], false),
            new waxeye.State([new waxeye.Edge("R", 6, false)], false),
            new waxeye.State([new waxeye.Edge("N", 31, false)], false),
            new waxeye.State([new waxeye.Edge("S", 6, false)], false),
            new waxeye.State([new waxeye.Edge("O", 33, false)], false),
            new waxeye.State([new waxeye.Edge("C", 6, false)], false),
            new waxeye.State([new waxeye.Edge("S", 35, false)], false),
            new waxeye.State([new waxeye.Edge("R", 6, false)], false),
            new waxeye.State([new waxeye.Edge("P", 37, false)], false),
            new waxeye.State([new waxeye.Edge("R", 6, false)], false),
            new waxeye.State([new waxeye.Edge("M", 39, false)], false),
            new waxeye.State([new waxeye.Edge("P", 6, false)], false),
            new waxeye.State([new waxeye.Edge("O", 41, false)], false),
            new waxeye.State([new waxeye.Edge("C", 6, false)], false),
            new waxeye.State([new waxeye.Edge("D", 43, false)], false),
            new waxeye.State([new waxeye.Edge("T", 6, false)], false),
            new waxeye.State([new waxeye.Edge("L", 6, false)], false)], waxeye.FA.LEFT),
        new waxeye.FA("adjp", [new waxeye.State([new waxeye.Edge("A", 1, false)], false),
            new waxeye.State([new waxeye.Edge("D", 2, false)], false),
            new waxeye.State([new waxeye.Edge("J", 3, false)], false),
            new waxeye.State([new waxeye.Edge("P", 4, false)], false),
            new waxeye.State([new waxeye.Edge("-", 5, false)], true),
            new waxeye.State([new waxeye.Edge("P", 6, false),
                new waxeye.Edge("S", 9, false)], false),
            new waxeye.State([new waxeye.Edge("R", 7, false)], false),
            new waxeye.State([new waxeye.Edge("D", 8, false)], false),
            new waxeye.State([], true),
            new waxeye.State([new waxeye.Edge("P", 10, false)], false),
            new waxeye.State([new waxeye.Edge("R", 8, false)], false)], waxeye.FA.LEFT),
        new waxeye.FA("advp", [new waxeye.State([new waxeye.Edge("A", 1, false)], false),
            new waxeye.State([new waxeye.Edge("D", 2, false)], false),
            new waxeye.State([new waxeye.Edge("V", 3, false)], false),
            new waxeye.State([new waxeye.Edge("P", 4, false)], false),
            new waxeye.State([new waxeye.Edge("-", 5, false)], true),
            new waxeye.State([new waxeye.Edge("D", 6, false),
                new waxeye.Edge("L", 9, false),
                new waxeye.Edge("T", 11, false)], false),
            new waxeye.State([new waxeye.Edge("I", 7, false)], false),
            new waxeye.State([new waxeye.Edge("R", 8, false)], false),
            new waxeye.State([], true),
            new waxeye.State([new waxeye.Edge("O", 10, false)], false),
            new waxeye.State([new waxeye.Edge("C", 8, false)], false),
            new waxeye.State([new waxeye.Edge("M", 12, false)], false),
            new waxeye.State([new waxeye.Edge("P", 8, false)], false)], waxeye.FA.LEFT),
        new waxeye.FA("pp", [new waxeye.State([new waxeye.Edge("P", 1, false)], false),
            new waxeye.State([new waxeye.Edge("P", 2, false)], false),
            new waxeye.State([], true)], waxeye.FA.LEFT),
        new waxeye.FA("nump", [new waxeye.State([new waxeye.Edge("N", 1, false)], false),
            new waxeye.State([new waxeye.Edge("U", 2, false)], false),
            new waxeye.State([new waxeye.Edge("M", 3, false)], false),
            new waxeye.State([new waxeye.Edge("P", 4, false)], false),
            new waxeye.State([], true)], waxeye.FA.LEFT),
        new waxeye.FA("qp", [new waxeye.State([new waxeye.Edge("Q", 1, false)], false),
            new waxeye.State([new waxeye.Edge("P", 2, false)], false),
            new waxeye.State([], true)], waxeye.FA.LEFT),
        new waxeye.FA("conjp", [new waxeye.State([new waxeye.Edge("C", 1, false)], false),
            new waxeye.State([new waxeye.Edge("O", 2, false)], false),
            new waxeye.State([new waxeye.Edge("N", 3, false)], false),
            new waxeye.State([new waxeye.Edge("J", 4, false)], false),
            new waxeye.State([new waxeye.Edge("P", 5, false)], false),
            new waxeye.State([], true)], waxeye.FA.LEFT),
        new waxeye.FA("wh_phrase", [new waxeye.State([new waxeye.Edge("W", 1, false)], false),
            new waxeye.State([new waxeye.Edge("A", 2, false),
                new waxeye.Edge("N", 4, false),
                new waxeye.Edge("P", 4, false),
                new waxeye.Edge("Q", 4, false)], false),
            new waxeye.State([new waxeye.Edge("D", 3, false)], false),
            new waxeye.State([new waxeye.Edge("J", 4, false),
                new waxeye.Edge("V", 4, false)], false),
            new waxeye.State([new waxeye.Edge("P", 5, false)], false),
            new waxeye.State([], true)], waxeye.FA.LEFT)]);
    return parser;
 
})();

// Add to module system
if (typeof module !== 'undefined') {
    module.exports.Parser = Parser;
}
