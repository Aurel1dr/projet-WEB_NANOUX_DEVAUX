function toggleAcc(id) {
                    const item = document.getElementById(id);
                    const body = item.querySelector('.acc-body');
                    const arrow = item.querySelector('.acc-arrow');
                    const isOpen = item.classList.contains('open');

    
                    if (!isOpen) {
                        item.classList.add('open');
                        body.style.maxHeight = body.scrollHeight + 1000 + 'px'; 
                        arrow.style.transform = 'rotate(180deg)';
                    } else {
                        item.classList.remove('open');
                        body.style.maxHeight = null;
                        arrow.style.transform = 'rotate(0deg)';
                    }
                }

                function toggleSub(id) {
                    const item = document.getElementById(id);
                    const body = item.querySelector('.sub-acc-body');
                    const arrow = item.querySelector('.sub-arrow');
                    const isOpen = item.classList.contains('open');
                    
                    item.classList.toggle('open', !isOpen);
                    body.style.maxHeight = isOpen ? null : body.scrollHeight + 'px';
                    arrow.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
                    
                    
                    const parentBody = item.closest('.acc-body');
                    if (parentBody && !isOpen) {
                        parentBody.style.maxHeight = (parentBody.scrollHeight + body.scrollHeight) + 'px';
                    }
                }