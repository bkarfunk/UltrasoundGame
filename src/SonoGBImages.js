import SonoCholecystitis from './Images/GB/SonoImages/SonoAcuteChole.png';
import SonoGBNorm1 from './Images/GB/SonoImages/sonoNormalGB1_1.PNG';
import SonoGBNorm2 from './Images/GB/SonoImages/sonoNormalGB2_1.PNG';



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


const SonoCholecystitisMap = 
{
	name: "SonoCholeMap",
	areas: [
		{name: "Stones", shape: "poly", coords: [552,351,559,365,590,357,617,344,638,331,657,321,659,306,659,295,642,301,614,309,601,310,579,322,568,329,556,332]},
		{name: "Anterior GB Wall", shape: "poly", coords: [455,311,467,321,478,308,488,297,499,285,510,279,525,267,538,259,549,250,542,240,531,250,520,257,500,271,487,278,479,290,467,301]},
		{name: "Pericholecystic Fluid", shape: "poly", coords: [389,377,395,386,408,378,417,368,430,355,444,339,436,328,423,345,406,354]}
	]
}




const SonoGBMaps = [SonoGBNorm1Map, SonoGBNorm2Map, SonoCholecystitisMap];
var SonoGBImages = [SonoGBNorm1, SonoGBNorm2, SonoCholecystitis];

export {SonoGBMaps, SonoGBImages};
