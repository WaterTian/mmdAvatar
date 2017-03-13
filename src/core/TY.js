// namespace:
this.TY = this.TY || {};

TY.VERSION = "0";
TY.Debug = 1;

TY.HLS_URL ='http://101.201.107.35:8088/hls/12345678.m3u8';



TY.datas = [
	{1:100,34:100},
	{2:100,17:100},
	{2:30,17:100,18:100},
	{2:30,17:20,18:20,19:100},
	{12:30,13:100},
	{12:100,9:100},
	{13:100,10:100},
	{35:20,36:160},
	{20:100},
	{35:0},
	{35:200},
	{36:0},
	{36:200},
	{37:0},
	{37:199}
];

// TY.datas = [
// 	{35:0},
// 	{36:0},
// 	{37:0}
// ];



TY.data = {};

TY.morphConifg = {
	length: 34,
	1: 'Blink_L',
	2: 'Blink_R',
	3: 'Blink',
	4: 'BrowDown',
	5: 'BrowUp_L',
	6: 'BrowUp_R',
	7: 'BrowUp',
	8: 'MouthOpen',
	9: 'Grin_L',
	10: 'Grin_R',
	11: 'Grin',
	12: 'Crooked mouth_L',
	13: 'Crooked mouth_R',
	14: 'Pout',
	15: 'Sniff',
	16: 'EyesUP',
	17: 'EyesDown',
	18: 'EyesLeft',
	19: 'EyesRight',
	20: 'TongueOut1',
	21: 'TongueOut2',
	22: 'TongueOut3',
	23: 'Mouth_A',
	24: 'Mouth_B',
	25: 'Mouth_U',
	26: 'Mouth_O',
	27: 'Mouth_E',
	28: 'UpperLip',
	29: 'LowerLip',
	30: 'Shrink mouth',
	31: 'N_Half open mouth_Up',
	32: 'N_Half open mouth_Down',
	33: 'Shrink mouth_L',
	34: 'Shrink mouth_R'
};



// TY.morphConifg = {
// 	length: 30,
// 	1: '真面目',
// 	2: '困る',
// 	3: 'にこり',
// 	4: '怒り',
// 	5: '上',
// 	6: '下',
// 	7: 'まばたき',
// 	8: '笑い',
// 	9: 'ウィンク',
// 	10: 'ウィンク２',
// 	11: 'ウィンク右',
// 	12: 'ｳｨﾝｸ２右',
// 	13: 'はぅ',
// 	14: 'なごみ',
// 	15: 'びっくり',
// 	16: 'じと目',
// 	17: 'なぬ！',
// 	18: '瞳小',
// 	19: 'あ',
// 	20: 'い',
// 	21: 'う',
// 	22: 'お',
// 	23: '▲',
// 	24: '∧',
// 	25: 'ω',
// 	26: 'ω□',
// 	27: 'はんっ！',
// 	28: 'ぺろっ',
// 	29: 'えー',
// 	30: 'にやり'
// };



TY.inherit = function(ctor, superCtor) {
	ctor.superClass = superCtor;
	ctor.prototype = Object.create(superCtor.prototype);
	ctor.prototype.constructor = ctor;
};
TY.extend = function(origin, add) {
	// Don't do anything if add isn't an object
	if (!add || typeof add !== 'object')
		return origin;
	var keys = Object.keys(add);
	var i = keys.length;
	while (i--) {
		origin[keys[i]] = add[keys[i]];
	}
	return origin;
};