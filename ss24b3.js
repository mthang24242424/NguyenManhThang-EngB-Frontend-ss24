let arr = [];
let choose;
let n;
do {
  choose = +prompt(`MENU
        1. Nhập vào số phần tử cần nhập và giá trị các phần tử
        2. Hiển thị các phần tử của mảng
        3. Tìm phần tử lớn nhất và in ra vị trí
        4. Tính tổng và trung bình cộng của các số dương
        5. Đảo ngược mảng
        6. Kiểm tra mảng có đối xứng hay ko
        7. Thoát
        Lựa chọn của bạn:`);
  switch (choose) {
    case 1:
      n = +prompt("Nhập số lượng phần tử");
      if (n > 0 && Number.isInteger(n)) {
        for (let i = 0; i < n; i++) {
          arr[i] = +prompt(`Nhập số nguyên thứ ${i + 1}`);
          while (Number.isNaN(arr[i])) {
            arr[i] = +prompt(`Vui lòng nhập số nguyên`);
          }
        }
      } else if (n == 0) {
        alert("mảng ko có phần tử");
      } else {
        alert("số lượng ko phù hợp");
      }
      break;
    case 2:
      if (n == 0 || n < 0) {
        console.log("Mảng chưa có phần tử nào");
      } else {
        console.log("các phần tử hiện có trong mảng");
        for (let i = 0; i < arr.length; i++) {
          console.log(arr[i]);
        }
      }
      break;
    case 3:
      if (arr.length > 0) {
        let index;
        let max = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]>max) {
                max = arr[i];
                index = i;
            }
        }
        console.log(` số lớn nhất trong mảng là ${max} ở vị trí ${index} trong mảng`);
      } else {
        console.log("Mảng chưa có phần tử nào.");
      }
      break;
    case 4:
      if (arr.length > 0) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i]>0) {
            sum += arr[i];
          }
        }
        let average = sum / n;
        console.log(` tổng các số dương trong mảng là ${sum}`);       
        console.log(`trung bình cộng các số dương trong mảng là ${average}`);
      } else {
        console.log(`mảng chưa có phần tử nào`);
      }
      break;
    case 5:
        if (arr.length > 0) {
            for(let i = 0; i< arr.length/2; i++){
                let temp = arr[i];
                arr[i] = arr[arr.length - i -1];
                arr[arr.length - i -1] = temp;
            }
        } else {
            console.log("mảng chưa có phần tử nào");
        }
        break;
    case 6:
        if (arr.length > 0) {
            let check = 1;
            for(let i = 0; i< arr.length/2; i++){
                if (arr[i] != arr[arr.length - i -1]) {
                    check = -1;
                    break;
                }
            }
            if (check == 1) {
                console.log(` đây là mảng đối xứng`);    
            } else {
                console.log(` đây ko phải mảng đối xứng`);
            }
        } else {
            console.log(` Mảng chưa có phần tử nào`);
        }
        break;
    case 7:
        console.log("Thoát chương trình.");
        break;
    default:
      alert("Lựa chọn không hợp lệ!");
    }
} while (choose !== 7);