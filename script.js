const openStory = document.getElementById('openStory');
openStory.addEventListener('click', () => document.getElementById('story').scrollIntoView({behavior:'smooth'}));

document.querySelectorAll('.memory-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.memory-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    document.getElementById('memoryReveal').textContent = card.dataset.message;
  });
});

const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const letterHint = document.getElementById('letterHint');
envelope.addEventListener('click', () => {
  const isOpen = letter.classList.toggle('show');
  envelope.classList.toggle('open', isOpen);
  letter.setAttribute('aria-hidden', String(!isOpen));
  letterHint.textContent = isOpen ? 'A little piece of my heart, just for you. ♡' : 'There’s a little letter waiting for you. Tap the envelope.';
  if (isOpen) setTimeout(() => letter.scrollIntoView({behavior:'smooth', block:'center'}), 150);
});

const modal = document.getElementById('photoModal');
document.querySelectorAll('.polaroid').forEach(photo => {
  photo.addEventListener('click', () => {
    const caption = photo.querySelector('figcaption')?.textContent || 'A favorite memory';
    const image = photo.querySelector('img');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = image?.src || '';
    modalImage.alt = image?.alt || caption;
    document.getElementById('modalText').textContent = caption + ' — one of many moments I want to keep forever. ♡';
    modal.classList.add('show');
    modal.setAttribute('aria-hidden','false');
  });
});
function closeModal(){modal.classList.remove('show');modal.setAttribute('aria-hidden','true');}
document.getElementById('closeModal').addEventListener('click', closeModal);
modal.addEventListener('click', e => {if(e.target === modal) closeModal();});
document.addEventListener('keydown', e => {if(e.key === 'Escape') closeModal();});

