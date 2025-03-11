let arr = [];
let choose;
let n;
do {
  choose = +prompt(`MENU
        1. Nhập vào số phần tử cần nhập và giá trị các phần tử
        2. Hiển thị các phần tử của mảng
        3. Tìm phần tử chẵn, lẻ
        4. Tính trung bình cộng 
        5. Xóa phần tử vị trí chỉ định
        6. Tìm phần tử lớn thứ 2 trong mảng
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
        let chan = [];
        let le = [];
        let countC = 0;
        let countL = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] % 2 == 0) {
            chan.push(arr[i]);
            countC++;
          } else {
            le.push(arr[i]);
            countL++;
          }
        }
        console.log("các số chẵn trong mảng là");
        for (let i = 0; i < countC; i++) {
            console.log(chan[i]); 
        }
        console.log("các số lẻ trong mảng là");
        for (let i = 0; i < countL; i++) {
            console.log(le[i]); 
        }
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
        let average = sum / n;
        console.log(`trung bình cộng các phần tử trong mảng là ${average}`);
      } else {
        console.log(`mảng chưa có phần tử nào`);
      }
      break;
    case 5:
        if (arr.length > 0) {
            let index = +prompt("Nhập vào vị trí cần xóa");
            while (!(index >= 0 && index < n)) {
                index = +prompt(` Nhập vị trí từ 0 đến ${n-1}`);
            }
            arr.splice(index,1);
        } else {
            console.log("mảng chưa có phần tử nào");
            
        }
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
            console.log("giá trị lớn thứ 2 là");
            for (let i = n-2; i > 0; i--) {
                console.log(arr[i]);
                break;
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