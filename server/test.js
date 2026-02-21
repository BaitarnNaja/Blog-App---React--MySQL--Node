const mysql = require("mysql2/promise");

(async () => {
  try {
    const conn = await mysql.createConnection({
      host: "192.168.1.10",
      user: "blog_app",
      password: "password123",
      database: "BLOG-DATA",
      port: 3306
    });

    console.log("CONNECTED OK");
  } catch (e) {
    console.error(e);
  }
})();
