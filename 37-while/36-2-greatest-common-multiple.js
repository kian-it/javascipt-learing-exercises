/**
 * Sử dụng vòng lặp while để tìm bội số chung lớn nhất của 3 và 5 trong khoảng từ 0 đến 1000
 */

function boiChungLonNhat(a, b, tu, den) {
    let boiSo = den;
    while (boiSo >= tu) {
        if (boiSo % 3 === 0 && boiSo % 5 === 0) return boiSo;
        boiSo--;
    }
}

console.log(boiChungLonNhat(3, 5, 0, 1000));