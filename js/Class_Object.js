var objOstacolo = {
	minPosT:90,
	maxPosT:510,
	minPosD:20,
	maxPosD:460,
	getRandT: function () {
		var posT = Math.random() * (this.maxPosT - this.minPosT) + this.minPosT;
		return posT;		
	},
	getRandL: function () {
		var posL = Math.random() * (this.maxPosD - this.minPosD) + this.minPosD;
		return posL;		
	}
}
