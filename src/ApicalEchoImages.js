import SonoEchoApical1 from './Images/Echo/EchoApical1.png'
import SonoEchoApical2ch1 from './Images/Echo/EchoApical2ch1.png'
import SonoEchoApical3ch1 from './Images/Echo/EchoApical3ch1.png'

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

const SonoEchoApical2ch1MAPAnatomy = 
{ //normal
name: "SonoEchoApical2ch1Anatomy",
areas:
    [
        {name: "Mitral Valve", shape: "poly", coords: [435,382,444,365,457,352,479,344,505,341,532,344,558,361,544,366,537,358,518,351,483,357,462,367,447,383]},
        {name: "Anterior Left Ventricle", shape: "poly", coords: [581,354,587,311,571,282,556,249,536,222,514,191,486,162,469,135,453,135,479,165,542,262,567,315,566,354]},
        {name: "Apical Left Ventricle", shape: "poly", coords: [469,126,448,110,424,102,396,96,369,99,352,112,346,122,344,138,344,156,346,166,369,163,363,135,370,113,399,114,429,121,452,129]},
        {name: "Inferior Left Ventricl", shape: "poly", coords: [349,173,350,192,350,205,352,237,354,270,353,310,360,341,366,349,384,371,390,384,407,395,421,388,394,367,391,338,389,309,389,275,387,251,375,213,371,182,367,167]},
        {name: "LV Chamber", shape: "poly", coords: [432,379,444,356,459,343,482,332,512,335,533,340,557,358,560,339,556,308,540,278,520,252,501,218,481,197,465,178,441,163,436,152,418,137,398,127,380,123,371,143,373,189,384,234,394,307,399,337,406,364,416,373]},
        {name: "Left Atrium", shape: "poly", coords: [450,389,461,374,482,366,503,363,527,365,540,383,556,428,570,453,574,467,550,478,508,479,490,477,477,465,462,436,450,418]},
        {name: "Left Atrial Appendage", shape:"poly", coords:[566,395,581,388,589,379,608,376,616,396,609,409,590,418,579,419,568,417,557,401]}
    ]
}


const SonoEchoApical2ch1MAPSegmentalAnatomy = 
{ //normal
name: "SonoEchoApical2ch1SegmentalAnatomy",
areas:
    [
        {name: "Basal Inferior Segment", shape: "poly", coords: [433,381,414,375,404,366,394,357,385,330,358,325,359,334,365,350,372,367,384,380,402,388,412,393]},
        {name: "Mid Inferior Segment", shape: "poly", coords: [384,323,385,308,383,284,389,258,382,231,374,203,354,205,355,218,354,232,354,256,355,288,357,309,357,317]},
        {name: "Apical Inferior Segment", shape: "poly", coords: [352,199,346,178,346,145,346,124,352,115,365,106,373,117,366,132,366,140,367,157,367,170,367,186,371,193,372,199]},
        {name: "Apical Anterior Segment", shape: "poly", coords: [372,105,390,104,417,104,433,109,453,116,463,125,475,141,463,148,445,130,440,118,425,116,409,117,382,117]},
        {name: "Mid Anterior Segment", shape: "poly", coords: [476,143,486,151,491,163,496,175,502,187,510,198,518,209,528,223,540,245,542,253,533,258,523,243,513,227,505,215,499,207,488,191,478,176,471,162,466,150]},
        {name: "Basal Anterior Segment", shape: "poly", coords: [548,256,564,279,568,299,577,314,578,339,569,355,557,358,556,341,558,325,558,306,550,286,545,274,539,264]}
    ]
}

const SonoEchoApical2ch1MAPCoronaryAnatomy = 
{ //normal
name: "SonoEchoApical2ch1CoronaryAnatomy",
areas:
    [
        {name: "RCA", shape: "poly", coords: [425,383,413,380,403,369,388,358,389,332,388,292,385,252,372,201,370,180,347,174,347,188,350,206,355,232,355,252,357,273,356,296,358,318,360,337,364,354,373,369,385,380,397,388,414,395,421,396,431,390]},
        {name: "LAD", shape: "poly", coords: [370,173,367,159,365,146,364,130,368,119,383,115,401,115,410,118,419,131,432,146,444,152,455,164,470,178,479,188,494,206,509,234,526,271,537,300,542,316,550,337,552,349,563,354,578,348,577,327,567,307,556,287,546,267,539,251,527,229,519,216,510,200,495,179,482,157,469,141,442,124,429,112,413,105,395,101,379,101,363,106,354,113,350,129,350,147,349,161,348,168]}
        
    ]
}

const SonoEchoApical3ch1MAPAnatomy = 
{ //normal
name: "SonoEchoApical3ch1Anatomy",
areas:
    [
        {name: "LV Lateral Wall", shape: "poly", coords: [415,387,389,376,380,325,374,286,383,223,404,186,416,163,408,135,386,145,369,192,357,246,352,290,352,345,366,383,385,398]},
        {name: "Interventricular Septem", shape: "poly", coords: [536,331,527,293,521,248,506,216,486,187,473,200,486,234,498,259,504,293,500,311,499,336,501,346]},
        {name: "LV Outflow Tract", shape: "poly", coords: [505,352,521,374,528,392,510,405,498,410,487,387,477,371]},
        {name: "Mitral Valve", shape: "poly", coords: [408,391,418,380,419,362,415,349,424,346,432,355,435,368,437,381,446,391,450,381,449,371,441,353,441,337,457,341,464,363,474,376,483,391,487,399,467,402,430,402,413,400]},
        {name: "Left Atrium", shape: "poly", coords: [432,411,436,437,441,457,457,482,473,518,498,529,521,527,524,508,521,486,498,463,491,448,486,427,476,413]}
    ]

}

const SonoEchoApical3ch1MAPSegmentalAnatomy = 
{ //normal
name: "SonoEchoApical3ch1SegmentalAnatomy",
areas:
    [
        {name: "Basal Infero-Lateral Segment", shape: "poly", coords: [415,388,400,377,395,357,389,343,380,326,373,313,355,312,354,325,354,336,363,358,371,381,378,392,390,394,401,400]},
        {name: "Mid Infero-Lateral Segment", shape: "poly", coords: [355,307,355,293,357,269,361,249,366,226,389,228,385,244,384,266,379,282,376,298,376,306]},
        {name: "Apical Lateral Segment", shape: "poly", coords: [393,222,403,202,414,186,421,172,417,146,411,136,396,142,389,153,382,171,376,190,371,207,368,221]},
        {name: "Apical Septal Segment", shape: "poly", coords: [417,136,437,141,444,142,459,158,473,171,477,181,481,189,473,201,466,192,458,181,445,168,435,161,428,162]},
        {name: "Mid Antero-Septum Segment", shape: "poly", coords: [485,191,505,220,516,248,524,280,498,289,499,268,494,248,486,233,478,211,472,204]},
        {name: "Basal Antero-Septum Segment", shape: "poly", coords: [524,284,526,299,532,311,539,327,540,342,508,352,503,334,502,322,501,309,499,292]}
    ]
}

const SonoEchoApical3ch1MAPCoronaryAnatomy = 
{ //normal
name: "SonoEchoApical3ch1CoronaryAnatomy",
areas:
    [
        {name: "RCA or Circumflex", shape: "poly", coords: [393,378,370,389,364,369,361,345,357,330,357,313,353,298,356,268,362,240,365,228,384,230,379,280,378,309,394,338]},
        {name: "LAD", shape: "poly", coords: [386,228,394,208,407,188,420,173,443,175,467,194,479,226,489,263,499,290,496,324,494,338,508,338,509,307,509,284,500,253,491,225,479,198,459,164,438,143,422,132,404,134,389,144,381,160,371,191,366,215,365,220]}
        
    ]
}

const SonoEchoApicalNormalMaps = [SonoEchoApical1MAPAnatomy,SonoEchoApical1MAPSegmentalAnatomy, SonoEchoApical1MAPCoronaryAnatomy,SonoEchoApical2ch1MAPAnatomy,SonoEchoApical2ch1MAPSegmentalAnatomy,SonoEchoApical2ch1MAPCoronaryAnatomy,SonoEchoApical3ch1MAPAnatomy,SonoEchoApical3ch1MAPSegmentalAnatomy,SonoEchoApical3ch1MAPCoronaryAnatomy];
const SonoEchoApicalNormalImages = [SonoEchoApical1,SonoEchoApical1,SonoEchoApical1,SonoEchoApical2ch1,SonoEchoApical2ch1,SonoEchoApical2ch1,SonoEchoApical3ch1,SonoEchoApical3ch1,SonoEchoApical3ch1];

const SonoEchoApicalAbNormalMaps = [];
const SonoEchoApicalAbNormalImages = [];

export {SonoEchoApicalNormalMaps, SonoEchoApicalNormalImages, SonoEchoApicalAbNormalMaps, SonoEchoApicalAbNormalImages};
