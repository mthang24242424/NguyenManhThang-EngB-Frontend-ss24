let arr = [];
let choose;
let rows, cols;
do {
    choose = +prompt(`MENU
        1. Nhập mảng 2 chiều
        2. Hiển thị mảng 2 chiều
        3. Tính tổng các phần tử trong mảng
        4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
        5. Tính trung bình cộng các phần tử trong một hàng cụ thể
        6. Đảo ngược các hàng trong mảng
        7. Thoát
        Lựa chọn của bạn:`);
    switch (choose) {
        case 1:
            let rows = +prompt("Nhập số hàng:");
            let cols = +prompt("Nhập số cột:");
            if (rows > 0 && cols > 0 && Number.isInteger(rows) && Number.isInteger(cols)) {
                let arr = [];
                for (let i = 0; i < rows; i++) {
                    let row = [];
                    for (let j = 0; j < cols; j++) {
                        let value;
                        do {
                            value = +prompt(`Nhập phần tử tại vị trí (${i},${j}):`);
                        } while (isNaN(value)); 
                        row.push(value);
                    }
                    arr.push(row);
                }
            } else {
                alert("Kích thước mảng không hợp lệ!");
            }
            break;
        case 2:
            if (arr.length === 0) {
                console.log("Mảng chưa có phần tử nào");
            } else {
                console.log("Mảng 2 chiều:");
                for (let i = 0; i < rows; i++) {
                    console.log(arr[i]);
                }
            }
            break;
        case 3:
            if (arr.length === 0) {
                console.log("Mảng chưa có phần tử nào.");
            } else {
                let sum = 0;
                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < cols; j++) {
                        sum += arr[i][j];
                    }
                }
                console.log(`Tổng các phần tử trong mảng: ${sum}`);
            }
            break;
        case 4:
            if (arr.length === 0) {
                console.log("Mảng chưa có phần tử nào.");
            } else {
                let max = arr[0][0];
                let index = [0, 0];
                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < cols; j++) {
                        if (arr[i][j] > max) {
                            max = arr[i][j];
                            index = [i, j];
                        }
                    }
                }
                console.log(`Phần tử lớn nhất trong mảng là ${max} tại vị trí (${index[0]}, ${index[1]})`);
            }
            break;
        case 5:
            if (arr.length === 0) {
                console.log("Mảng chưa có phần tử nào.");
            } else {
                let rowNum = +prompt("Nhập chỉ số hàng muốn tính trung bình:");
                if (rowNum >= 0 && rowNum < rows) {
                    let sum = 0;
                    for (let j = 0; j < cols; j++) {
                        sum += arr[rowNum][j];
                    }
                    let avg = sum / cols;
                    console.log(`Trung bình cộng của hàng ${rowNum} là: ${avg}`);
                } else {
                    console.log("Chỉ số hàng không hợp lệ!");
                }
            }
            break;
        case 6:
            if (arr.length === 0) {
                console.log("Mảng chưa có phần tử nào.");
            } else {
                for (let i = 0; i < rows; i++) {
                    arr[i].reverse();
                }
                console.log("Mảng sau khi đảo ngược hàng:");
                for (let i = 0; i < rows; i++) {
                    console.log(arr[i]);
                }
            }
            break;
        case 7:
            console.log("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }
} while (choose !== 7);
