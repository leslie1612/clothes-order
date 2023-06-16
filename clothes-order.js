function order() {
  var name = document.getElementById("name").value;

  var category = document.getElementById("category");
  var category_index = category.selectedIndex;
  var category_text = category[category_index].text;
  var category_value = category[category_index].value;

  var type = document.getElementById("type");
  var type_index = type.selectedIndex;
  var type_text = type[type_index].text;
  var type_value = type[type_index].value;

  var amount = document.getElementById("amount").value;
  var price = parseInt(amount); // paeseInt("")=NaN
  var price_men = price + "* 600";
  var price_women = price + "* 500";
  var total_men = price * 600;
  var total_women = price * 500;

  let discount = document.querySelector("li.totalCost");

  if (name != "") {
    if (category_value != "none") {
      if (type_value != "none") {
        if (amount <= 0) {
          alert("請輸入訂購數量。");
        } else if (amount < 10) {
          alert("抱歉，我們工廠的最低出貨量是 10 件。");
        } else if (amount > 500) {
          alert(
            "抱歉，我們工廠的最高出貨量是 500 件。大量訂購請致電 0987-654-321,會有專人提供您優惠報價！"
          );
        } else {
          document.getElementById("your_name").textContent = name;
          alert(name + "您好！" + "謝謝您對我們的衣服有興趣！");
          document.getElementById("your_category").textContent = category_text;
          document.getElementById("your_type").textContent = type_text;
          document.getElementById("your_amount").textContent = amount;
          if (category_text == category[1].text) {
            alert("最近剛好是工廠週年慶，只要您今天下單，男裝一律打8折！");
            // toastSuccess();
            document.getElementById("your_cost").textContent =
              price_men + " = " + total_men;
            document.getElementById("your_totalCost").textContent =
              total_men * 0.8;
            discount.style.color = "rgb(192, 0, 0)";
            discount.style.fontWeight = "600";
          } else {
            alert("最近剛好是工廠週年慶，只要您今天下單，女裝一律打75折！");
            // toastSuccess();
            document.getElementById("your_cost").textContent =
              price_women + " = " + total_women;
            document.getElementById("your_totalCost").textContent =
              total_women * 0.75;
            discount.style.color = "rgb(192, 0, 0)";
            discount.style.fontWeight = "600";
          }
        }
      } else {
        alert("請選擇服裝類型");
      }
    } else {
      alert("請選擇服裝分類");
    }
  } else {
    alert("請填寫您的大名。");
  }
}
function industry() {
  alert("我們工廠位於新北市，通過國際 ISO9001 認證，品質讓您放心！");
}

function del() {
  let orderName = document.querySelector("span#your_name");
  let orderCategory = document.querySelector("span#your_category");
  let orderType = document.querySelector("span#your_type");
  let orderAmount = document.querySelector("span#your_amount");
  let orderCost = document.querySelector("span#your_cost");
  let orderDiscount = document.querySelector("span#your_totalCost");
  let discount = document.querySelector("li.totalCost");

  orderName.textContent = "";
  orderCategory.textContent = "";
  orderType.textContent = "";
  orderAmount.textContent = "";
  orderCost.textContent = "";
  orderDiscount.textContent = "";
  discount.style.color = "black";
  discount.style.fontWeight = "normal";

  document.getElementById("name").value = "";
  document.getElementById("category").value = "none";
  document.getElementById("type").value = "none";
  document.getElementById("amount").value = "";
  // toastError();
}

function toastSuccess() {
  let success = document.querySelector(".toast-success");
  success.style.display = "block";
  setTimeout(() => (success.style.display = "none"), 5000);
}

function toastError() {
  let error = document.querySelector(".toast-error");
  error.style.display = "block";
  setTimeout(() => (error.style.display = "none"), 5000);
}
