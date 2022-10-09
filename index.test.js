const test=require('./index');

Test('check is num 2',()=>{
    expect(test.isWDS('WDS')).toBe(true);
});