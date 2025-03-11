let str = "";
let choose;
do {
    choose = +prompt(`MENU
        1. Nhập chuỗi
        2. Hiển thị chuỗi
        3. Tính độ dài chuỗi
        4. Đếm số lần xuất hiện của 1 ký tự trong chuỗi
        5. Kiểm tra chuỗi có phải chuỗi đối xứng ko
        6. Chuyển đổi chuỗi thành chữ in hoa các kí tự đầu tiên của từ
        7. Thoát
        Lựa chọn của bạn:`);
  switch (choose) {
    case 1:
      str = prompt("Nhập chuỗi bất kì");
      break;
    case 2:
      if (str.length === 0) {
        console.log("Chuỗi rỗng");
      } else {
        console.log(str);
      }
      break;
    case 3:
      console.log(` Độ dài chuỗi hiện tại là ${str.length}`);
      break;
    case 4:
      let character = prompt("Nhập 1 kí tự bất kì để kiểm tra");
      let count = 0;
      while (character.length != 1) {
        character = prompt("Vui lòng nhập 1 kí tự");
      }
      for (let i = 0; i < str.length; i++) {
        if (str[i] == character) {
          count ++;
        }
      }
      console.log(`Ký tự ${character} xuất hiện ${count} lần trong chuỗi`);
      break;
    case 5:
        if (str.length == 0) {
          console.log(` Chuỗi chưa có gì để kiểm tra`);
        } else {
          let check = 1;
          for (let i = 0; i < str.length/2; i++) {
            if (str[i] != str[str.length-i-1]) {
              check = -1;
              break;
            }
          }
          if (check == 1) {
            console.log("đây là chuỗi đối xứng");
          } else {
            console.log("đây ko phải chuỗi đối xứng");
          }
        }
        break;
    case 6:
      if (str.length === 0) {
        console.log(`Chuỗi chưa có gì để chuyển đổi`);
    } else {
        str = str.trim();
        let arr = str.split("");
        arr[0] = arr[0].toUpperCase();
        for (let i = 1; i < arr.length - 1; i++) {
            if (arr[i] === " ") {
                arr[i + 1] = arr[i + 1].toUpperCase();
            }
        }
        str = arr.join("");
        console.log(str);
    }
    break;
    case 7:
        console.log("Thoát chương trình.");
        break;
    default:
      alert("Lựa chọn không hợp lệ!");
    }
} while (choose !== 7);