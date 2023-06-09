function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
  }

  let main = document.querySelector('.bigmargin')

let pages =
{
    '#home':
    `
    <h1>首頁</h1>
    <p>本網頁可以按功能表去切換畫面</p>
    `
    ,
    '#login':
    `
    <h1>登入</h1>

    <tr>
    <label for="account">帳號</label><br>
    <td><p><input type="email" placeholder="email帳號"/></p></td>
    <td><p><input type="text" placeholder="密碼"/></p></td>
    </tr>

    <form action="test.php" method="post">
    <input type="submit" value="登入">
    </form>

    `
    ,

    '#logout':
    `
    <h1>登出</h1>
    <p>確認是否登出?</p>

    <form action="test.php" method="post">
    <input type="submit" value="登出">
    <input type="submit" value="取消">
    </form>


    `
    ,

    '#signup':
    `
    <h1><div style=";width:400px;height:30px;text-align:center;line-height:50px;">註冊</DIV></h1>
    <form>
    <fieldset style="width: 10cm;: top 10cm;">
    
    <table>
    <tr>
    <label for="name">名稱</label><br>
    <td><p><input type="text" placeholder="姓氏" /></p></td>
    <td><p><input type="text" placeholder="名字"/></p></td>
    </tr>
    </table>
    
    
    <br>
    <table>
    <tr>
    <label for="account">帳號</label><br>
    <td><p><input type="email" placeholder="email帳號"/></p></td>
    <td><p><input type="text" placeholder="密碼"/></p></td>
    </tr>
    </table>
        
    

    </fieldset>

    <form action="test.php" method="post">
    <input type="submit" value="送出表單">
    </form>
    
    `
}
window.onhashchange = function() 
{
    let hash = window.location.hash
    main.innerHTML =pages[hash]
}