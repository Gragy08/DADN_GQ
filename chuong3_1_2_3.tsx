// Chương 3

// 1. Chọn vật liệu trục
const vatLieuTruc: string = "thep_C45";
const ungSuatXoanChoPhep_t = 20;
const o1 = 260;
const ob = 600;
const t1 = 150;

console.log(`Vật liệu trục là: ${vatLieuTruc}`);
console.log(`Sơ bộ ứng suất xoắn cho phép [t] = ${ungSuatXoanChoPhep_t}`);
console.log(`Các thông số khác: o1 = ${o1} ; ob = ${ob} ; t1 = ${t1}`);
// 1. Hết Chọn vật liệu trục


// 2. Xác định sơ bộ đường kính các trục
//T1 và T2 là dữ liệu đầu vào của phần 2 chương 
const T1 = 145252.23;
const T2 = 1364084.03;
//T3 lấy ở chương 1
const T3 = 4537489.11; 

const duongKinhTruc = (T: number, t: number): number => {
  const d = Math.pow((T / (0.2 * t)), 1 / 3);
  return d;
};

const bang_d: number[] = [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 100];

const lamTronDuongKinhTheoBang10_2 = (dsb: number): number => {
  for (let i = 0; i < bang_d.length; i++) {
    if (dsb <= bang_d[i]) {
      return bang_d[i];
    }
  }
  // Nếu vượt quá bảng, trả về giá trị cuối cùng
  return bang_d[bang_d.length - 1];
};


const duongKinhTruc_dsb1_raw = duongKinhTruc(T1, ungSuatXoanChoPhep_t);
const duongKinhTruc_dsb1 = lamTronDuongKinhTheoBang10_2(duongKinhTruc_dsb1_raw);
console.log(`Đường kính trục dsb1 là: ${duongKinhTruc_dsb1} (mm)`);
const duongKinhTruc_dsb2_raw = duongKinhTruc(T2, ungSuatXoanChoPhep_t);
const duongKinhTruc_dsb2 = lamTronDuongKinhTheoBang10_2(duongKinhTruc_dsb2_raw);
console.log(`Đường kính trục dsb1 là: ${duongKinhTruc_dsb2} (mm)`);
const duongKinhTruc_dsb3_raw= duongKinhTruc(T3, ungSuatXoanChoPhep_t);
const duongKinhTruc_dsb3 = lamTronDuongKinhTheoBang10_2(duongKinhTruc_dsb3_raw);
console.log(`Đường kính trục dsb1 là: ${duongKinhTruc_dsb3} (mm)`);
// 2. Hết Xác định sơ bộ đường kính các trục


// 3. Chọn kích thước dọc trục
const bang_b = [15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 47];

const timBo = (dsb: number): number => {
  for (let i = 0; i < bang_d.length; i++) {
    if (dsb <= bang_d[i]) {
      return bang_b[i];
    }
  }
  // Nếu lớn hơn hết thì trả về giá trị cuối
  return bang_b[bang_b.length - 1];
};

const chieuRongOLan_bo1 = timBo(duongKinhTruc_dsb1);
console.log(`Chiều rộng ổ lăn bo1 = ${chieuRongOLan_bo1} (mm)`)
const chieuRongOLan_bo2 = timBo(duongKinhTruc_dsb2);
console.log(`Chiều rộng ổ lăn bo2 = ${chieuRongOLan_bo2} (mm)`)
const chieuRongOLan_bo3 = timBo(duongKinhTruc_dsb3);
console.log(`Chiều rộng ổ lăn bo3 = ${chieuRongOLan_bo3} (mm)`)

const tinhBanhDai = (d: number): number => {
  const min = Math.ceil(1.2 * d);
  const max = Math.floor(1.5 * d);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const banhdai_Lm12 = tinhBanhDai(duongKinhTruc_dsb1);
console.log(`Kích thước bánh đai l_m12: ${banhdai_Lm12} mm`);

const tinhBanhVit = (d: number): number => {
  const min = Math.ceil(1.2 * d);
  const max = Math.floor(1.8 * d);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const banhvit_Lm22 = tinhBanhDai(duongKinhTruc_dsb2);
console.log(`Kích thước bánh vít l_m12: ${banhvit_Lm22} mm`);

const banhRangTru_Lm23 = tinhBanhDai(duongKinhTruc_dsb3);
console.log(`Kích thước bánh răng trụ l_m23: ${banhRangTru_Lm23} mm`);

const banhRangTru_Lm34 = tinhBanhDai(duongKinhTruc_dsb3);
console.log(`Kích thước bánh răng trụ l_m34: ${banhRangTru_Lm34} mm`);

const tinhChieuDaiMayorNuaKhopNoi = (d: number): number => {
  const min = Math.ceil(1.4 * d);
  const max = Math.floor(2.5 * d);
  let result = 0;

  do {
    result = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (result <= 162);

  return result;
};

const chieuDaiMayorNuaKhopNoi_Lm33 = tinhChieuDaiMayorNuaKhopNoi(duongKinhTruc_dsb3);
console.log(`Chiều dài mayor nửa khớp nối Lm33 = ${chieuDaiMayorNuaKhopNoi_Lm33}`);

const k1 = 10;
const k2 = 12;
const k3 = 15;
const hn = 17;

const tinhTruc1_L12 = (lm12: number, bo1: number, k3: number, hn: number): number => {
  const l12 = 0.5*(lm12 + bo1) + k3 + hn;
  return l12;
}

const trucI_l12 = (tinhTruc1_L12(banhdai_Lm12, chieuRongOLan_bo1, k3, hn)).toFixed(1);
console.log(`l12 = ${trucI_l12} (mm)`);


//số liệu từ 2.7 chương 2 là 390 nên ở dưới có thể sẽ đổi lại
const daM2 = 377;
const tinhTruc1_L11 = (daM2: number): number => {
  const min = Math.ceil(daM2 * 0.9); // Làm tròn lên giá trị thấp nhất
  const max = daM2 * 1; // Giới hạn trên là 377

  const l11 = Math.floor(Math.random() * (max - min + 1)) + min;

  return l11;
};

const trucI_l11 = tinhTruc1_L11(daM2);
console.log(`l11 = ${trucI_l11} (mm)`);

const trucI_l13 = trucI_l11/2;
console.log(`l13 = ${trucI_l13} (mm)`);

//random theo Lm22
const trucII_l22 = tinhTruc1_L12(banhvit_Lm22, chieuRongOLan_bo2, k1, k2);
console.log(`l22 = ${trucII_l22} (mm)`);

//random theo Lm22
const trucII_l21 = tinhTruc1_L12(banhvit_Lm22, banhRangTru_Lm23, k1, trucII_l22);
console.log(`l21 = ${trucII_l21} (mm)`);

const trucII_l23 = trucII_l21 + tinhTruc1_L12(banhRangTru_Lm23, chieuRongOLan_bo2, k1, k2);
console.log(`l23 = ${trucII_l23} (mm)`);

const trucIII_l32 = trucII_l21;
console.log(`l32 = ${trucIII_l32} (mm)`);

const trucIII_l31 = trucII_l23;
console.log(`l31 = ${trucIII_l31} (mm)`);

const trucIII_lc33 = hn + k3 + chieuDaiMayorNuaKhopNoi_Lm33;
console.log(`lc33 = ${trucIII_lc33} (mm)`);

const trucIII_l33 = trucIII_l31 + trucIII_lc33;
console.log(`l33 = ${trucIII_l33} (mm)`);
// 3. Hết Chọn kích thước dọc trục