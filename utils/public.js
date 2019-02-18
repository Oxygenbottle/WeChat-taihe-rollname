const globalMethods = {
    addList(){
        db.collection('todos').add({
            // data 字段表示需新增的 JSON 数据
            data: {
              groupName: '第一组',
              leader: '张三', 
              groupId: 1, 
              member: [
                '张三',
                '李四',
                '王五'
              ],
              location: new db.Geo.Point(113, 23),
              done: false
            },
            success(res) {
              console.log(res)
            }
        })
    }
    
};

export default globalMethods;