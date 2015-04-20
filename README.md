# TodoList
cd todo/public
babel jsx --watch --out-dir js
cd todo/public/js
watchify todo.js -o bundle.js
cd todo/public/stylesheet
./watch.sh
