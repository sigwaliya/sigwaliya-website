const m=document.querySelector('.menu'),l=document.querySelector('.links');
if(m&&l){m.addEventListener('click',()=>{l.classList.toggle('open');m.setAttribute('aria-expanded',l.classList.contains('open')?'true':'false')});}
document.querySelectorAll('.year').forEach(e=>e.textContent=new Date().getFullYear());
const here=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.links a').forEach(a=>{const p=new URL(a.href,location.href).pathname.split('/').pop();if(p===here)a.classList.add('active')});
document.querySelectorAll('a[href*="XXXXXXXXXX"]').forEach(a=>{a.href='contact.html';if(a.classList.contains('float'))a.style.display='none';else if(/whatsapp|call/i.test(a.textContent))a.textContent='Contact Us →';});
const f=document.querySelector('#enquiryForm');
if(f)f.addEventListener('submit',e=>{e.preventDefault();const n=document.querySelector('#name')?.value.trim(),p=document.querySelector('#phone')?.value.trim(),s=document.querySelector('#service')?.value,msgText=document.querySelector('#message')?.value.trim(),msg=document.querySelector('#formMsg');if(!n||!s||!msgText){if(msg)msg.textContent='Please enter your name, select a service and describe your requirement.';return;}const subject=`Sigwaliya Website Enquiry - ${s}`;const body=`Name: ${n}\nMobile: ${p||'Not provided'}\nService: ${s}\n\nRequirement:\n${msgText}`;if(msg)msg.textContent='Opening your email app with the enquiry details…';location.href=`mailto:sigwaliya@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;});
