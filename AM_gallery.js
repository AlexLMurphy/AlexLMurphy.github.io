function showImage(self) {
	if (self.isMagnified == null || self.isMagnified == false) {
		self.isMagnified = true;
		self.marginOld = self.style.margin;
		self.widthOld = self.style.width;
		self.style.width = "100%";
		self.style.margin = "0 0 0 0";
		
	} else {	
		self.style.width = self.widthOld;
		self.style.margin = self.marginOld;
		self.isMagnified = false;
	}
}