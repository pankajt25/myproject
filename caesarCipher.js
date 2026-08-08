let s="Hello";
console.log(s.replace(/[a-z]/gi,c=>String.fromCharCode((c<="Z"?65:97)+(c.charCodeAt()- (c<="Z"?65:97)+3)%26)));