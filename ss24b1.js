let arr = [];
let choose;
let n;
do {
  choose = +prompt(`MENU
        1. Nhập vào số phần tử cần nhập và giá trị các phần tử
        2. Hiển thị các phần tử của mảng
        3. Tìm phần tử lớn nhất, nhỏ nhất
        4. Tính tổng các phần tử trong mảng
        5. Tìm số lần xuất hiện của 1 phần tử trong mảng
        6. Sắp xếp mảng tăng dần
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
        let max = arr[0];
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] > max) {
            max = arr[i];
          }
          if (arr[i] < min) {
            min = arr[i];
          }
        }
        console.log(`Giá trị lớn nhất: ${max}`);
        console.log(`Giá trị nhỏ nhất: ${min}`);
      } else {
        console.log("Mảng chưa có phần tử nào.");
      }
      break;
    case 4:
      if (arr.length > 0) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          sum += arr[i];
        }
        console.log(` tổng số các phần tử trong mảng là ${sum}`);
      } else {
        console.log(` tổng số các phần tử trong mảng là ${sum}`);
      }
      break;
    case 5:
        let count = 0;
        let number = +prompt("nhập số bất kì để kiểm tra");
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] == number) {
            count++;
          }
        }
        console.log(`${number} xuất hiện ${count} lần trong mảng`);
        break;
    case 6:
        if (arr.length > 0) {
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n - 1 - i; j++) {
                    if (arr[j] > arr[j + 1]) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
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
