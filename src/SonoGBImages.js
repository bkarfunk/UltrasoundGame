import SonoCholecystitis from './Images/GB/SonoImages/SonoAcuteChole.png';
import SonoGBNorm1 from './Images/GB/SonoImages/sonoNormalGB1_1.PNG';
import SonoGBNorm2 from './Images/GB/SonoImages/sonoNormalGB2_1.PNG';
import SonoCBDCystitisStonePCFCBD1 from './Images/GB/SonoImages/SonoGBCystitisStonePCFCBD1_1.PNG'
import SonoGBStoneInNeck1 from './Images/GB/SonoImages/SonoGBStoneInNeck1_1.PNG'
import SonoGBDopplerCBD1 from './Images/GB/SonoImages/SonoGBDopplerCBD1.PNG'
import SonoGBShortAxis1 from './Images/GB/SonoImages/SonoGBShortAxis.PNG'
import SonoGBNormalFakeOutDuo1 from './Images/GB/SonoImages/SonoGBFakeOutStoneDuo1.PNG'
import SonoGBWES1 from './Images/GB/SonoImages/SonoGBWES1_1.PNG'
import SonoGBNormHepatobil1 from './Images/GB/SonoImages/SonoGBNormalHepatoBilAnatom1_1.PNG'
import SonoGBStone2 from './Images/GB/SonoImages/SonoGBStones2_1.PNG'

const SonoGBNorm1Map = 
{
	name: "SonoGBNorm1Map",
	areas: [
		{name: "Neck of the Gallbladder", shape: "poly", coords: [499,564,488,571,482,590,488,602,512,608,525,607,540,596,556,590,525,538,517,553,529,583,519,577]},
		{name: "Anterior GB Wall", shape: "poly", coords: [566,443,582,428,610,407,642,384,668,370,695,364,747,357,747,372,716,374,689,380,659,391,641,402,622,414,605,426,588,438,576,452]},
		{name: "Common Bile Duct", shape: "circle", coords: [323,522,12]},
		{name: "Hepatic Artery", shape: "circle", coords: [389,555,16]},
		{name: "Portal Vein", shape: "circle", coords: [320,598,33]}
	]
}
			

const SonoGBNorm2Map = 
{
	name: "SonoGBNorm2Map",
	areas: [
		{name: "Neck of the Gallbladder", shape: "poly", coords: [500,363,512,361,525,355,536,352,544,362,548,382,546,392,539,395,516,395,507,394,499,393]},
		{name: "Anterior GB Wall", shape: "poly", coords: [602,255,615,243,629,234,640,223,652,211,668,201,684,187,697,182,700,187,690,194,682,201,672,209,665,217,657,222,648,229,637,238,625,246,616,255,609,260]},
		{name: "Common Bile Duct", shape: "poly", coords: [378,338,388,340,398,342,409,347,418,349,414,355,404,351,395,347,386,345,378,343]},
		{name: "Fundus of Gallbladder", shape: "poly", coords: [654,225,712,277,722,267,737,255,750,239,762,227,773,213,774,197,769,184,753,178,739,174,724,178,703,186,685,201]},
		{name: "Portal Vein", shape: "circle", coords: [405,386,26]}
	]
}			
const SonoGBDopplerCBD1MAP = 
{
	name: "SonoDopplerCBDMap",
	areas: [
		{name: "Portal Vein", shape: "poly", coords: [580,548,595,546,628,546,661,543,688,538,723,535,758,531,799,529,812,531,817,550,823,583,794,585,756,586,717,590,693,591,656,595,628,596,599,596,575,591,550,586,532,588,534,561,534,548,548,545,569,547]},
		{name: "CBD", shape: "poly", coords: [576,528,588,530,617,529,643,526,675,522,699,520,720,516,749,516,777,513,796,509,806,508,799,485,771,486,757,488,727,494,706,495,682,503,661,507,648,503,631,507,621,506,606,506,594,505,575,503]}
	]
}

const SonoGBShortAxis1MAP = 
{
	name: "SonoShortAxisMap",
	areas: [
		{name: "Gallbladder", shape: "poly", coords: [636,415,638,395,648,377,660,360,670,351,683,347,700,343,723,342,750,337,770,337,792,339,803,349,816,366,818,390,798,414,784,437,769,452,753,469,722,476,700,476,672,476,659,475,643,463,636,446]},
		{name: "Anterior GB Wall", shape: "poly", coords: [804,322,798,330,788,329,772,327,759,328,748,330,732,331,714,336,708,338,696,340,681,340,671,346,659,353,644,365,637,355,643,348,654,341,663,336,673,330,704,321,733,319,743,318,757,318,766,317,778,315,789,317]}
	]
}


const SonoGBNormalFakeOutDuo1MAP = 
{//normal fake out
	name: "SonoGBNormalFakeOutDuo1MAP",
	areas: [
		{name: "Gallbladder", shape: "poly", coords: [808,288,789,297,773,309,760,319,745,329,724,340,709,358,696,369,666,394,641,411,621,424,602,436,581,454,564,479,553,496,552,503,553,510,567,506,586,506,605,512,620,512,632,509,639,500,648,473,660,458,674,450,695,445,708,409,716,403,732,394,748,388,766,372,782,366,793,360,802,353,809,346,815,335,816,321,816,302]},
		{name: "Duodenum", shape: "poly", coords: [652,531,653,502,664,477,681,459,707,457,729,460,747,468,756,482,764,503,774,523,775,536,765,557,738,569,692,568,672,556]},
		{name: "Anterior GB Wall", shape: "poly", coords: [782,275,765,280,761,287,749,297,737,302,719,311,704,327,692,342,682,353,671,365,655,377,640,387,624,397,613,405,623,414,638,408,662,392,677,377,702,358,718,331,732,324,744,319,757,311,765,303,775,295,786,287]}
	]
}

const SonoGBNormHepatobil1MAP=
{
	name: "SonoGBWES1_1Map",
	areas: [
		{name: "Anterior GB Wall", shape: "poly", coords: [523,474,541,453,556,441,592,420,623,404,667,381,703,373,758,367,764,377,746,379,724,383,699,382,672,392,643,402,612,418,580,438,545,468]},
		{name: "Gallbladder", shape: "poly", coords: [633,534,615,542,600,554,583,564,563,574,535,576,511,551,516,525,531,497,546,473,562,458,593,438,630,416,672,400,706,387,737,386,773,382,811,382,838,392,847,411,847,434,826,464,807,476,786,492,748,496,719,508,673,519]},
		{name: "Main Portal Vein", shape: "poly", coords: [235,524,256,530,271,539,288,551,302,558,331,576,351,600,371,610,361,635,333,635,315,619,299,610,292,588,278,576,265,571,244,565,229,554,221,542,217,531,221,527]},
		{name: "Common Bile Duct", shape: "poly", coords: [344,569,330,560,324,553,307,543,289,533,296,526,307,530,316,537,325,542,335,547,348,552,354,555]},
		{name: "Intrahepatic Portal Vein", shape: "poly", coords: [491,408,525,399,561,390,583,385,601,388,588,395,568,402,546,407,512,413,497,415]}

	]  
}

const SonoCholecystitisMap = 
{ //abnormal
	name: "SonoCholeMap",
	areas: [
		{name: "Stones", shape: "poly", coords: [552,351,559,365,590,357,617,344,638,331,657,321,659,306,659,295,642,301,614,309,601,310,579,322,568,329,556,332]},
		{name: "Anterior GB Wall", shape: "poly", coords: [455,311,467,321,478,308,488,297,499,285,510,279,525,267,538,259,549,250,542,240,531,250,520,257,500,271,487,278,479,290,467,301]},
		{name: "Pericholecystic Fluid", shape: "poly", coords: [389,377,395,386,408,378,417,368,430,355,444,339,436,328,423,345,406,354]}
	]
}


const SonoCBDCystitisStonePCFCBD1MAP = 
{//abnormal
	name: "SonoCholeStoneMap",
	areas: [
		{name: "Stone", shape: "poly", coords: [428,530,440,536,453,538,463,544,477,548,491,546,504,540,522,540,538,541,545,534,543,521,538,510,525,505,512,505,501,515,484,511,470,504,457,504,447,504,439,504,430,508,427,518]},
		{name: "Anterior GB Wall", shape: "poly", coords: [559,277,571,264,585,253,598,237,612,226,623,215,598,199,586,207,571,221,559,236,556,248,551,256,545,263]},
		{name: "Pericholecystic Fluid", shape: "poly", coords: [383,411,396,411,418,411,432,411,440,411,447,394,448,381,460,354,476,344,491,326,508,308,527,290,534,278,523,271,501,288,494,297,489,305,475,316,468,323,452,335,425,362,411,367,394,367,380,367,375,378,374,391]},
		{name: "Gallbladder", shape: "poly", coords: [463,424,473,379,501,345,545,290,629,206,673,183,718,171,774,158,830,166,867,179,915,228,947,254,944,296,922,328,870,364,804,394,743,434,690,461,644,488,608,509,568,531,522,476]},
		{name: "Gallbladder's Neck", shape: "poly", coords: [462,478,454,462,450,447,446,433,432,433,412,433,385,444,365,455,350,468,349,485,365,499,381,510,401,526,413,537,432,545,441,549,427,531,420,519,440,496,457,500,483,501,494,507,505,498,491,488,474,493]}
	]
}


const SonoGBStoneInNeck1MAP = 
{//abnormal
	name: "SonoStoneMap",
	areas: [
		{name: "Stone", shape: "circle", coords: [515,569,27]},
		{name: "Anterior GB Wall", shape: "poly", coords: [500,270,517,251,546,222,578,199,632,178,644,190,615,199,581,212,549,234,530,253,520,267,510,283]},
		{name: "Gallbladder's Neck", shape: "poly", coords: [549,589,557,574,563,550,564,533,549,515,532,513,510,511,491,515,473,518,473,550,479,569,483,582,495,591,491,555,515,540,542,549]},
		{name: "Gallbladder", shape: "poly", coords: [712,172,685,177,660,184,639,191,621,193,600,203,580,213,565,225,548,240,531,262,517,283,500,315,483,354,478,400,468,434,463,481,466,511,484,513,496,503,508,501,549,508,568,515,564,469,566,440,576,394,586,369,581,350,593,345,598,352,615,358,634,362,664,360,690,353,707,348,743,343,766,333,787,328,800,314,814,289,817,255,804,231,785,207,748,177]}
	]
}

const SonoGBWES1MAP=
{//abnormal
	name: "SonoGBWES1_1Map",
	areas: [
		{name: "Anterior GB Wall", shape: "poly", coords: [579,337,593,330,604,325,618,319,641,311,675,301,704,296,706,306,686,310,662,318,636,325,619,333,589,347]},
		{name: "Stone", shape: "poly", coords: [587,372,599,357,617,350,635,341,666,329,682,326,704,315,734,310,760,305,775,316,756,330,738,343,706,356,650,382,612,400,599,402,573,409,557,379]},
		{name: "Portal Vein", shape: "circle", coords: [294,538,25]},
		{name: "Hepatic Artery", shape: "circle", coords: [294,484,17]},
		{name: "Common Bile Duct", shape: "circle", coords: [329,503,13]}

	]  
}

const SonoGBStone2MAP=
{//abnormal
	name: "Stone2MAP",
	areas:[
		{name: "Anterior GB Wall", shape: "poly", coords: [607,238,603,233,598,227,589,221,580,214,573,212,564,206,553,201,547,197,538,192,527,186,516,182,506,176,509,170,515,173,525,179,533,183,543,187,552,193,558,197,570,203,586,213]},
		{name: "Stones", shape: "poly", coords: [613,337,601,335,588,341,580,336,562,339,557,332,544,332,542,324,535,314,528,313,518,313,508,305,499,305,488,308,489,314,493,320,501,322,508,327,513,334,523,337,531,342,544,345,553,349,565,349,577,352,587,356,602,357,616,350,627,342,634,334,640,326,634,321,624,324]},
		{name: "Portal Vein", shape: "poly", coords: [651,361,659,354,669,348,679,348,691,351,707,356,715,362,715,368,708,376,696,381,688,383,676,383,657,379]},
		{name: "CBD", shape: "poly", coords: [681,338,687,338,690,343,697,343,703,341,710,340,716,341,722,344,729,343,725,334,715,334,693,334,683,332]},
		{name: "Gallbladder", shape: "poly", coords: [406,144,449,159,478,165,496,174,509,181,531,191,540,198,561,208,587,223,601,235,618,256,628,286,635,309,623,324,615,330,606,333,591,334,582,334,573,332,559,331,547,325,538,314,528,308,515,302,502,301,493,300,487,308,485,316,482,321,472,313,459,301,447,290,438,280,426,271,412,259,402,246,389,235,379,224,375,212,371,198,374,179,380,161]}
	]  
}


const SonoGBNormalMaps = [SonoGBNorm1Map, SonoGBNorm2Map, SonoGBShortAxis1MAP,SonoGBNormalFakeOutDuo1MAP,SonoGBDopplerCBD1MAP,SonoGBNormHepatobil1MAP];
const SonoGBNormalImages = [SonoGBNorm1, SonoGBNorm2, SonoGBShortAxis1,SonoGBNormalFakeOutDuo1,SonoGBDopplerCBD1,SonoGBNormHepatobil1];

const SonoGBAbNormalMaps = [SonoCholecystitisMap, SonoCBDCystitisStonePCFCBD1MAP, SonoGBStoneInNeck1MAP,SonoGBWES1MAP,SonoGBStone2MAP]
const SonoGBAbNormalImages = [SonoCholecystitis,SonoCBDCystitisStonePCFCBD1,SonoGBStoneInNeck1,SonoGBWES1,SonoGBStone2];

export {SonoGBNormalMaps, SonoGBNormalImages, SonoGBAbNormalMaps, SonoGBAbNormalImages};
