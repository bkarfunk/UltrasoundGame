import SonoEchoApical1 from './Images/Echo/EchoApical1.png'

const SonoEchoApical1MAPAnatomy = 
{ //normal
name: "SonoEchoApical1Anatomy",
areas:
    [
        {name: "interventricular septum", shape: "poly", coords: [361,177,360,188,356,204,356,221,356,237,360,253,357,271,359,293,361,312,364,334,364,344,381,347,389,347,386,326,386,309,383,294,380,272,381,259,381,247,381,236,386,225,385,209,388,199,382,186,380,177]},
        {name: "intraatrial septum", shape: "poly", coords: [385,367,387,374,386,389,388,404,392,415,389,430,400,438,414,437,414,420,411,405,411,389,412,373,412,364]},
        {name: "Left Ventricular Chamber", shape: "poly", coords: [394,342,394,329,392,307,393,284,390,262,393,237,394,212,393,193,387,179,393,157,393,146,403,142,421,137,436,142,444,153,458,187,466,201,476,221,482,239,485,259,490,282,492,296,490,316,467,302,457,275,433,269,424,287,425,300,423,313,417,322,408,333]},
        {name: "Mitral Valve", shape: "poly", coords: [408,347,415,335,423,326,430,322,431,306,430,289,436,300,439,312,461,316,472,317,485,322,489,334,479,345,457,328,436,340,429,350]},
        {name: "Left Atrium", shape: "poly", coords: [418,429,418,409,418,383,418,362,437,344,453,338,466,342,473,361,475,376,470,390,454,411,449,430]},
        {name: "Right Atrium", shape: "poly", coords: [378,367,381,384,381,408,383,425,376,445,361,451,341,444,327,431,320,411,327,386,330,376,330,368]},
        {name: "Tricuspin Valve", shape: "poly", coords: [369,360,358,362,346,361,332,360,320,360,307,360,310,345,317,340,340,343,358,346]},
        {name: "Left Ventricular Apex", shape: "poly", coords: [381,168,360,167,369,146,386,133,399,126,419,122,438,122,455,128,472,146,449,152,429,134,396,141]},
        {name: "Left Ventricular Lateral Wall", shape: "poly", coords: [451,156,474,153,483,165,490,183,503,210,511,238,517,269,521,282,521,310,517,320,506,330,496,326,494,267,488,235,469,200]},
        {name: "Right Ventricular Chamber", shape: "poly", coords: [360,335,357,323,356,297,353,278,355,261,350,240,353,214,351,185,339,178,329,183,319,198,313,225,310,247,305,277,309,298,311,323,311,330]}
    ]

}



const SonoEchoApical1MAPSegmentalAnatomy = 
{ //normal
name: "SonoEchoApical1SegmentalAnatomy",
areas:
    [
        {name: "Basal Septal Segment", shape: "poly", coords: [367,345,364,332,364,317,361,311,362,287,384,286,384,307,384,318,386,333,389,346]},
        {name: "Mid Septal Segment", shape: "poly", coords: [360,283,386,284,386,271,382,259,385,250,386,237,389,218,358,217,358,251,357,273]},
        {name: "Apical Septal Segment", shape: "poly", coords: [358,213,385,216,386,196,385,177,387,160,393,145,415,141,414,121,399,120,379,126,367,139,358,156,352,183]},
        {name: "Apical Lateral Segment", shape: "poly", coords: [416,120,429,120,444,123,453,127,462,140,472,156,488,177,499,197,477,203,470,186,457,173,440,158,420,142]},
        {name: "Mid Lateral Segment", shape: "poly", coords: [477,210,502,206,508,217,515,240,518,263,518,271,489,273,493,250,488,231]},
        {name: "Basal Lateral Segment", shape: "poly", coords: [489,278,492,288,493,299,491,311,489,322,518,324,520,313,520,300,520,288,514,276]}
    ]

}

const SonoEchoApical1MAPCoronaryAnatomy = 
{ //normal
name: "SonoEchoApical1CoronaryAnatomy",
areas:
    [
        {name: "RV RCA", shape: "poly", coords: [303,216,315,197,330,192,341,192,357,191,359,171,364,157,379,134,370,128,342,130,319,157,303,179,289,207,270,258,259,291,251,320,246,342,280,348,282,319,282,298,287,279,296,253]},
        {name: "Septal RCA", shape: "poly", coords: [366,340,384,350,390,348,383,330,382,308,383,294,359,289,362,325]},
        {name: "RCA or LAD", shape: "poly", coords: [360,283,381,288,381,273,381,256,381,236,385,223,356,216,355,251]},
        {name: "LAD", shape: "poly", coords: [358,212,361,191,361,172,366,156,378,137,384,130,398,122,416,120,440,121,451,126,459,134,429,138,406,137,391,148,386,163,384,177,384,187,385,202,386,211]},
        {name: "LAD or CX", shape: "poly", coords: [421,143,442,161,450,183,460,196,472,230,483,259,489,299,490,320,490,326,509,334,518,315,519,290,519,270,515,249,505,220,499,201,489,186,478,173,464,156,459,140]}

    ]

}


const SonoEchoApicalNormalMaps = [SonoEchoApical1MAPAnatomy,SonoEchoApical1MAPSegmentalAnatomy, SonoEchoApical1MAPCoronaryAnatomy];
const SonoEchoApicalNormalImages = [SonoEchoApical1,SonoEchoApical1,SonoEchoApical1];

const SonoEchoApicalAbNormalMaps = [];
const SonoEchoApicalAbNormalImages = [];

export {SonoEchoApicalNormalMaps, SonoEchoApicalNormalImages, SonoEchoApicalAbNormalMaps, SonoEchoApicalAbNormalImages};
