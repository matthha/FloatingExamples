tt = document.querySelector('.top')
const makeFav = (b) => {
    localStorage.setItem('my.fav', JSON.stringify(b));
}

const myFunc = (a) => {
    const d = document.createElement('div')
    const h = document.createElement('h2')
    const c2 = document.createElement('div')
    const ds = document.createElement('div')
    const ab = document.createElement('a')
    const p = document.createElement('p')
    const im = document.createElement('img')
    const bt = document.createElement('button')
// card creator
    tt.appendChild(d)
    d.className="card"
// img in first box
    d.appendChild(im)
    im.src=a['imgl']
    im.alt='Box art for '+a['game']
// 2nd box
    d.appendChild(c2)
    c2.className='car'
// Game name in 2nd box
    c2.appendChild(h)
    h.textContent=a['game']
    
// Score,Star as child of h-GameName
    c2.appendChild(ab)
    ab.appendChild(ds)
    ab.href=a['reviewlink']
    ab.target='_blank'
    ds.textContent=a['score']
    ds.className='score'
    c2.appendChild(bt)
    bt.textContent='star'
    bt.className='material-symbols-outlined'
    bt.addEventListener('click',(e) => {
        makeFav(a)
    })
// Description in last box
    d.appendChild(p)
    p.textContent=a['desc']
    p.tabIndex='0'


  
}
