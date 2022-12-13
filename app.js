// nodejs  la một runtime giúp hco js có thể chạy trên sever
// 2.mô hình client-server
// clienr(browsers) -----Request---->sever
//                  <-------respone -------
// request (get/post/put/delete)
// reponse (html,css,js,json)

// 3. csr với ssr
// client-side rendering
// server sẽ gửi thông về cho client dưới dạng json và brosew
// sẽ render ra những thông tin đó
// vdu:
// build trang web front-end dựa vào api


// server-side rendering
// server sẽ gửi về html .css js. cho client
// và browser sẽ render ra trang web mong muốn 
// vidu: toàn bộ html .css..js.sẽ được build tại backend (server)

//npm-node package manager 
// khởi  tạo file backed.json
// file package.json là nơi lưu trữ các thông tin về project node.js
// dồng thời là nơi quản lý thông tin về các packeds
// đã cài đặt vào project nodejs

// 2, npm install (i) + package_name
// muốn cài đặt goi (package) nào thì tìm trên chợ npm (npmjs.com)
// tiến hành cài đặt :npm +i+package_name

//3. trường dependencies trong package.json
// quản lý thông tin về các packages
// đã cài đặt vào project nodejs
//trong trường hợp muốn cài lại toàn bộ những package có trong dêpndencies
// ------> npm + i

// note thêm hihi
// câu lệnh ls là kiểm tra thư mục
// cd [folder] - di chuyển vào trong thư mục nào đó
// cd.. - di chuyển ra khỏi thư mục hiện tại 

// 4, file.gitignore
// khi muốn đẩy project nodejs lên trên github
// khởi tạo 1 file tên .gitignore và điền những thư mục
// hoặc file không muốn đẩy lên 
// lưu ý forder " /" còn file thì chỉ viết tên file.thuộc tính