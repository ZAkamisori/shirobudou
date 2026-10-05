const c = window.siteContent;
document.getElementById('name').textContent = c.name;
document.getElementById('bio').textContent = c.bio;
c.links.forEach((item,i) => {
 const row = document.createElement(item.url ? 'a' : 'div');
 row.className = 'link-row' + (item.url ? '' : ' pending');
 if(item.url){const u=new URL(item.url);if(!['https:','http:'].includes(u.protocol))throw new Error('URLにはhttpsを指定してください');row.href=u.href;row.target='_blank';row.rel='noopener noreferrer';}
 const number=document.createElement('span');number.className='link-number';number.textContent=`0${i+1}`;
 const text=document.createElement('div');const title=document.createElement('h3');title.textContent=item.title;const sub=document.createElement('p');sub.textContent=item.subtitle;text.append(title,sub);
 const mark=document.createElement('span');mark.className='link-mark';mark.textContent=item.url?'開く':'準備中';row.append(number,text,mark);document.getElementById('link-list').append(row);
});
c.news.forEach(item=>{const li=document.createElement('li');const t=document.createElement('span');t.className='date';t.textContent=item.date;const p=document.createElement('span');p.textContent=item.text;li.append(t,p);document.getElementById('news-list').append(li);});
