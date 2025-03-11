let str = "";
let choose;

do {
    choose = +prompt(`MENU
        1. Nhập chuỗi
        2. Hiển thị chuỗi
        3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi
        4. Đảo ngược chuỗi ký tự
        5. Đếm số lượng từ trong chuỗi
        6. Tìm kiếm và thay thế ký tự
        7. Thoát
        Lựa chọn của bạn:`);
  
    switch (choose) {
        case 1:
            str = prompt("Nhập chuỗi bất kì:");
            break;
        case 2:
            console.log(str.length === 0 ? "Chuỗi rỗng" : str);
            break;
        case 3:
            if (str.length === 0) {
                console.log("Chuỗi chưa có gì để xử lý.");
            } else {
                str = str.trim();
                console.log("Chuỗi sau khi loại bỏ khoảng trắng:", str);
            }
            break;
        case 4:
            if (str.length === 0) {
                console.log("Chuỗi chưa có gì để đảo ngược.");
            } else {
                let strRever = str.split("").reverse().join("");
                console.log("Chuỗi đảo ngược:", strRever);
            }
            break;
        case 5:
            if (str.length === 0) {
                console.log("Chuỗi chưa có gì để đếm từ.");
            } else {
                let count = 0;
                str = str.trim();
                for (let i = 0; i < str.length; i++) {
                    if (str[i] === " " && str[i + 1] !== " " && i + 1 < str.length) {
                        count++;
                    }
                }
                if (str.length > 0) {
                    wordCount = count + 1;
                } else {
                    wordCount = 0;
                }
                console.log(`Số lượng từ trong chuỗi: ${wordCount}`);
            }
            break;
        case 6:
            if (str.length === 0) {
                console.log("Chuỗi chưa có gì để tìm kiếm và thay thế.");
            } else {
                let findChar = prompt("Nhập ký tự cần tìm:");
                if (findChar.length !== 1) {
                    console.log("Vui lòng nhập một ký tự duy nhất.");
                    break;
                }
                if (!str.includes(findChar)) {
                    console.log(`Không tìm thấy ký tự '${findChar}' trong chuỗi.`);
                    break;
                }
                let replaceChar = prompt("Nhập ký tự thay thế:");
                str = str.replaceAll(findChar, replaceChar);
                console.log("Chuỗi sau khi thay thế:", str);
            }
            break;
        case 7:
            console.log("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }
} while (choose !== 7);
