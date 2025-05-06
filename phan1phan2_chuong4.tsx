// Chương 4 phần 1.1
let soVongQuay_n = 978.3;
let thoiGianLamViec_Lh = 4000;

// Lấy từ 5.2 chương 3
const RAx = 1271.72;
const RAy = 326.59;
const RCx = 1882.66;
const RCy = 2431.66;

let lucDocTrucCuaTrucVit_Fa1 = 7578.24; // 2.12 chuong 2
let lucDocTrucBanhVit_Fa2 = 2905.04; //2.12 chuong 2

const lucHuongTam_FAr = parseFloat(Math.sqrt(RAx**2 + RAy**2).toFixed(2));
console.log(`Lực hướng tâm F_Ar = ${lucHuongTam_FAr} (N)`);

const lucHuongTam_FCr = parseFloat(Math.sqrt(RCx**2 + RCy**2).toFixed(2));
console.log(`Lực hướng tâm F_Cr = ${lucHuongTam_FCr} (N)`);

let Fa = lucDocTrucCuaTrucVit_Fa1;
console.log(`Fa = ${Fa} (N)`);

const Fr2 = parseFloat((0.6*lucHuongTam_FAr).toFixed(2));
console.log(`Fr2 = ${Fr2} (N)`);

let duongKinhNgongTruc_d = 35;

// Lấy từ bảng ra
let d = 35;
let D = 80;
let D1 = 61.5;
let d1 = 56.5;
let B = 33;
let C1 = 27;
let T = 32.75;
let r = 2.5;
let r1 = 0.8;
let alpha = 11.17;
let khaNangTaiTrong_C7607 = 71.6;
let C0 = 61.5;

function degreeToRadian(degrees: number): number {
    return degrees * (Math.PI / 180);
}

const heSoTaiDocTruc_e = parseFloat((1.5*Math.tan(degreeToRadian(alpha))).toFixed(2));
console.log(`Hệ số tải dọc trục e = ${heSoTaiDocTruc_e}`);

const lucDocTrucPhu_S2 = parseFloat((0.83 * heSoTaiDocTruc_e * Fr2).toFixed(2));
console.log(`Lực dọc trục phụ S2 = ${lucDocTrucPhu_S2} (N)`);

lucDocTrucCuaTrucVit_Fa1 = lucDocTrucPhu_S2 + Fa;
console.log(`Fa1 = ${lucDocTrucCuaTrucVit_Fa1} (N)`);

lucDocTrucBanhVit_Fa2 = lucDocTrucPhu_S2;
console.log(`Fa2 = ${lucDocTrucBanhVit_Fa2} (N)`);

const heSo_V = 1;
const tySoSoBo = parseFloat((Fa/(heSo_V*0.4*lucHuongTam_FAr)).toFixed(2));
console.log(`Tỷ số sơ bộ = ${tySoSoBo}`);

const heSoTrongTai_X = 0.4;
const heSoTrongTai_Y = parseFloat((heSoTrongTai_X * 1/(Math.tan(degreeToRadian(alpha)))).toFixed(2));
console.log(`Hệ số trọng tải X = ${heSoTrongTai_X}`);
console.log(`Hệ số trọng tải Y = ${heSoTrongTai_Y}`);

const heSo_Kd = 1.2;
const heSo_Kt = 1;

let taiTrongQuyUoc_Q = parseFloat(((heSoTrongTai_X * heSo_V * lucHuongTam_FAr + heSoTrongTai_Y * Fa) * heSo_Kd * heSo_Kt).toFixed(2));
console.log(`Hệ số trọng tải Q = ${taiTrongQuyUoc_Q} (N)`);

const khaNangTaiTrongDong_L = (thoiGianLamViec_Lh * 60 * soVongQuay_n) / 1000000;
console.log(`L = ${khaNangTaiTrongDong_L} (vòng)`);

let khaNangTaiTrongDong_Ctt = parseFloat((taiTrongQuyUoc_Q * Math.pow(khaNangTaiTrongDong_L, 3/10)).toFixed(2));
console.log(`Khả năng tải trọng động Ctt = ${khaNangTaiTrongDong_Ctt} (N)`);

khaNangTaiTrong_C7607 = khaNangTaiTrong_C7607 * 1000;

console.log(`
  Vì Ctt > C (98181.5 > 71600)  => Ổ lăn không thỏa điều kiện đã chọn của tải trọng động => Ta chọn lại ổ lăn
`)
// Hết Chương 4 phần 1.1

// Chương 4 phần 1.2
d = 35;
D = 72;
B = 17;
r = 2.0;
r1 = 1.0;
let C2207 = 26.5;
C0 = 17.5;
let duongKinhChieuDaiConLan = 9;

taiTrongQuyUoc_Q = parseFloat((heSo_V * lucHuongTam_FCr * heSo_Kt * heSo_Kd).toFixed(2));
console.log(`Hệ số trọng tải Q = ${taiTrongQuyUoc_Q} (N)`);

console.log(`L = ${khaNangTaiTrongDong_L} (vòng)`);

khaNangTaiTrongDong_Ctt = parseFloat((taiTrongQuyUoc_Q * Math.pow(khaNangTaiTrongDong_L, 3/10)).toFixed(2));
console.log(`Khả năng tải trọng động Ctt = ${khaNangTaiTrongDong_Ctt} (N)`);

console.log(`
  Ctt < C (18978.9 < 26500) => Ổ lăn đã chọn thỏa tải trọng động
`)

// Theo bảng tra ta có C = 26500 (N)
C2207 = C2207 * 1000;

const tuoiTho_L = parseFloat(Math.pow((C2207/taiTrongQuyUoc_Q), 10/3).toFixed(2));
console.log(`Tuổi thọ L = ${tuoiTho_L} (triệu vòng)`);

const tuoiThoTinhBangGio_Lh = parseFloat(((1000000*tuoiTho_L)/(60*soVongQuay_n)).toFixed(2));
console.log(`Tuổi thọ tính bằng giờ Lh = ${tuoiThoTinhBangGio_Lh} (giờ)`);
// Hết Chương 4 phần 1.2

// Chương 4 phần 2

const soVongQuay_n2 = 87.66;
const thoiGianLamViec_Lh2 = 4000;

const RDx = 7362.5; //5.2 chuong 3
const RDy = 5476.22; //5.2 chuong 3

const lucHuongTam_FDr = parseFloat(Math.sqrt(RDx**2 + RDy**2).toFixed(2));
console.log(`Lực hướng tâm F_Dr = ${lucHuongTam_FDr} (N)`);

const RGx = 5656.74; //5.2 chuong 3
const RGy = 12230.93; //5.2 chuong 3

const lucHuongTam_FGr = parseFloat(Math.sqrt(RGx**2 + RGy**2).toFixed(2));
console.log(`Lực hướng tâm F_Gr = ${lucHuongTam_FGr} (N)`);

lucDocTrucBanhVit_Fa2  = 2905.04; // 2.12 chuong 2
Fa = lucDocTrucBanhVit_Fa2;
console.log(`Fa = ${Fa} (N)`);

const duongKinhNgongTruc_d2 = 70;

// Lấy từ bảng ra
const d2 = 70;
const D2 = 125;
const cD1_2 = 107;
const d1_2 = 96;
const B2 = 24;
const C1_2 = 21;
const T2 = 26.25;
const r2 = 2.5;
const r1_2 = 0.8;
const alpha_2 = 13.83;
let khaNangTaiTrong_C7214 = 95.9;
const C0_2 = 82.10;

const heSoTaiDocTruc_e2 = parseFloat((1.5*Math.tan(degreeToRadian(alpha_2))).toFixed(2));
console.log(`Hệ số tải dọc trục e = ${heSoTaiDocTruc_e2}`);

const lucDocTrucPhu_S1_2 = parseFloat((0.83 * heSoTaiDocTruc_e2 * lucHuongTam_FDr).toFixed(2));
console.log(`Lực dọc trục phụ S2 = ${lucDocTrucPhu_S1_2} (N)`);

const lucDocTrucPhu_S2_2= parseFloat((0.83 * heSoTaiDocTruc_e2 * lucHuongTam_FGr).toFixed(2));
console.log(`Lực dọc trục phụ S2 = ${lucDocTrucPhu_S2_2} (N)`);

const lucDocTrucCuaTrucVit_Fa1_2 = lucDocTrucPhu_S1_2;
console.log(`Fa1 = ${lucDocTrucCuaTrucVit_Fa1_2} (N)`);

const lucDocTrucBanhVit_Fa2_2 = lucDocTrucPhu_S1_2 + Fa;
console.log(`Fa2 = ${lucDocTrucBanhVit_Fa2_2} (N)`);

const tySoSoBo_2 = parseFloat((lucDocTrucBanhVit_Fa2_2/(heSo_V*lucHuongTam_FGr)).toFixed(2));
console.log(`Tỷ số sơ bộ = ${tySoSoBo_2}`);

const heSoTrongTai_Y2 = parseFloat((heSoTrongTai_X * 1/(Math.tan(degreeToRadian(alpha_2)))).toFixed(2));
console.log(`Hệ số trọng tải X = ${heSoTrongTai_X}`);
console.log(`Hệ số trọng tải Y = ${heSoTrongTai_Y2}`);

const taiTrongQuyUoc_Q2 = parseFloat(((heSoTrongTai_X * heSo_V * lucHuongTam_FGr + heSoTrongTai_Y2 * lucDocTrucBanhVit_Fa2_2) * heSo_Kd * heSo_Kt).toFixed(2));
console.log(`Hệ số trọng tải Q = ${taiTrongQuyUoc_Q2} (N)`);

const khaNangTaiTrongDong_L2 = parseFloat(((thoiGianLamViec_Lh2 * 60 * soVongQuay_n2) / 1000000).toFixed(2));
console.log(`L = ${khaNangTaiTrongDong_L2} (vòng)`);

const khaNangTaiTrongDong_Ctt2 = parseFloat((taiTrongQuyUoc_Q2 * Math.pow(khaNangTaiTrongDong_L2, 3/10)).toFixed(1));
console.log(`Khả năng tải trọng động Ctt = ${khaNangTaiTrongDong_Ctt2} (N)`);

khaNangTaiTrong_C7214 = khaNangTaiTrong_C7214 * 1000;

console.log(`
  Vì Ctt < C (43880.5 < 95900)  => Ổ lăn thỏa điều kiện đã chọn của tải trọng động
`)

const tuoiTho_L2 = parseFloat(Math.pow((khaNangTaiTrong_C7214/taiTrongQuyUoc_Q2), 10/3).toFixed(2));
console.log(`Tuổi thọ L = ${tuoiTho_L2} (triệu vòng)`);

const tuoiThoTinhBangGio_Lh2 = parseFloat(((1000000*tuoiTho_L2)/(60*soVongQuay_n2)).toFixed(2));
console.log(`Tuổi thọ tính bằng giờ Lh = ${tuoiThoTinhBangGio_Lh2} (giờ)`);

// Hết Chương 4 phần 2