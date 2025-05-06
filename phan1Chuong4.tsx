// Chương 4 phần 1.1
const soVongQuay_n = 978.3;
const thoiGianLamViec_Lh = 4000;

// Lấy từ 5.2 chương 3
const RAx = 1271.72;
const RAy = 326.59;
const RCx = 1882.66;
const RCy = 2431.66;
let Fa1 = 7578.24;

const lucHuongTam_FAr = parseFloat(Math.sqrt(RAx**2 + RAy**2).toFixed(2));
console.log(`Lực hướng tâm F_Ar = ${lucHuongTam_FAr} (N)`);

const lucHuongTam_FCr = parseFloat(Math.sqrt(RCx**2 + RCy**2).toFixed(2));
console.log(`Lực hướng tâm F_Cr = ${lucHuongTam_FCr} (N)`);

const Fa = Fa1;
console.log(`Fa = ${Fa} (N)`);

const Fr2 = parseFloat((0.6*lucHuongTam_FAr).toFixed(2));
console.log(`Fr2 = ${Fr2} (N)`);

const duongKinhNgongTruc_d = 35;

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
let C = 71.6;
let C0 = 61.5;

function degreeToRadian(degrees: number): number {
    return degrees * (Math.PI / 180);
}

const heSoTaiDocTruc_e = parseFloat((1.5*Math.tan(degreeToRadian(alpha))).toFixed(2));
console.log(`Hệ số tải dọc trục e = ${heSoTaiDocTruc_e}`);

const lucDocTrucPhu_S2 = parseFloat((0.83 * heSoTaiDocTruc_e * Fr2).toFixed(2));
console.log(`Lực dọc trục phụ S2 = ${lucDocTrucPhu_S2} (N)`);

Fa1 = lucDocTrucPhu_S2 + Fa;
console.log(`Fa1 = ${Fa1} (N)`);

let Fa2 = lucDocTrucPhu_S2;
console.log(`Fa2 = ${Fa2} (N)`);

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
const khaNangTaiTrong_C = 71600;

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
C = 26.5;
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
C = C * 1000;

const tuoiTho_L = parseFloat(Math.pow((C/taiTrongQuyUoc_Q), 10/3).toFixed(2));
console.log(`Tuổi thọ L = ${tuoiTho_L} (triệu vòng)`);

const tuoiThoTinhBangGio_Lh = parseFloat(((1000000*tuoiTho_L)/(60*soVongQuay_n)).toFixed(2));
console.log(`Tuổi thọ tính bằng giờ Lh = ${tuoiThoTinhBangGio_Lh} (giờ)`);
// Hết Chương 4 phần 1.2