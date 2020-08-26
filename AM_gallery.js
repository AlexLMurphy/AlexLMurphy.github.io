function showImage(self) {
	if (self.isMagnified == null || self.isMagnified == false) {
		self.isMagnified = true;
		self.style.width = String(window.innerWidth - 100) + "px";
		self.marginOld = self.style.margin;
		self.style.width = "100%";
		self.style.margin = "0 0 0 0";
		
	} else {	
		self.style.width = "65%";
		self.isMagnified = false;
		self.style.margin = self.marginOld;
	}
}