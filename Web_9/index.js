let sotiengui,laisuat,sonam,lai_1nam,sotiengoc_lai;
sotiengui = +prompt("Nhập số tiền gửi vnd");
laisuat = +prompt("Nhập lãi suất");
sonam = +prompt("Nhập số năm");
lai_1nam = sotiengui * (laisuat/100);
sotiengoc_lai = sotiengui + (lai_1nam *sonam);
document.write("Số tiền cả gốc lẫn lãi mà ngân hàng phải trả" + "sau" + sonam + "Năm là" +(sotiengoc_lai.toLocaleString ('en-US')) + "đồng");;