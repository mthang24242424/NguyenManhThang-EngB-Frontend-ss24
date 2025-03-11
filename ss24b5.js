let arr = [];
let choose;
let rows, cols;
do {
    choose = +prompt(`MENU
        1. Nhập mảng 2 chiều
        2. Hiển thị mảng 2 chiều
        3. Tính tổng các phần tử trong mảng
        4. Tính tổng đường chéo chính
        5. Tính tổng đường chéo phụ
        6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột
        7. Thoát
        Lựa chọn của bạn:`);

    switch (choose) {
        case 1:
            rows = +prompt("Nhập số hàng:");
            cols = +prompt("Nhập số cột:");
            if (rows > 0 && cols > 0 && Number.isInteger(rows) && Number.isInteger(cols)) {
                arr = [];
                for (let i = 0; i < rows; i++) {
                    arr[i] = [];
                    for (let j = 0; j < cols; j++) {
                        arr[i][j] = +prompt(`Nhập phần tử tại vị trí (${i},${j}):`);
                        while (isNaN(arr[i][j])) {
                            arr[i][j] = +prompt(`Vui lòng nhập số hợp lệ tại (${i},${j}):`);
                        }
                    }
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
                let sum = 0;
                for (let i = 0; i < rows; i++) {
                    sum += arr[i][i]; // Đường chéo chính (i, i)
                }
                console.log(`Tổng đường chéo chính: ${sum}`);
            }
            break;
        case 5:
            if (arr.length === 0) {
                console.log("Mảng chưa có phần tử nào.");
            } else {
                let sum = 0;
                for (let i = 0; i < rows; i++) {
                    sum += arr[i][cols - i - 1]; // Đường chéo phụ (i, cols - i - 1)
                }
                console.log(`Tổng đường chéo phụ: ${sum}`);
            }
            break;
        case 6:
            if (arr.length === 0) {
                console.log("Mảng chưa có phần tử nào.");
            } else {
                let type = prompt("Bạn muốn tính trung bình theo (h) hàng hay (c) cột?").toLowerCase();
                switch (type) {
                    case "h":
                        let rowNum = +prompt("Nhập chỉ số hàng muốn tính trung bình:");
                        if (rowNum >= 0 && rowNum < rows) {
                            let sum = 0;
                            for (let j = 0; j < cols; j++) {
                                sum += arr[rowNum][j];
                            }
                            console.log(`Trung bình cộng của hàng ${rowNum}: ${sum / cols}`);
                        } else {
                            console.log("Chỉ số hàng không hợp lệ!");
                        }
                        break;
                    case "c":
                        let colNum = +prompt("Nhập chỉ số cột muốn tính trung bình:");
                        if (colNum >= 0 && colNum < cols) {
                            let sum = 0;
                            for (let i = 0; i < rows; i++) {
                                sum += arr[i][colNum];
                            }
                            console.log(`Trung bình cộng của cột ${colNum}: ${sum / rows}`);
                        } else {
                            console.log("Chỉ số cột không hợp lệ!");
                        }
                        break;
                    default:
                        console.log("Lựa chọn không hợp lệ! Vui lòng nhập 'h' hoặc 'c'.");
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
