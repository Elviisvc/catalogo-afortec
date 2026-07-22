/* ==========================================================================
   AFORTEC / LOUSATEC - CATALOG INTERACTIVITY LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. DATASETS

  // Gallery Dataset (17 Images from 'Quadro Branco Liso')
  const galleryItems = [
    {
      id: 1,
      title: "Quadro Branco Liso - Reunião Executiva",
      category: "corporativo",
      categoryLabel: "Corporativo & Reunião",
      image: "Quadro Branco Liso/Reunião.png",
      desc: "Excelente para salas de reunião corporativas e planejamento estratégico."
    },
    {
      id: 2,
      title: "Quadro Branco Liso - Sala de Reunião Premium",
      category: "corporativo",
      categoryLabel: "Corporativo & Reunião",
      image: "Quadro Branco Liso/Reunião 01.png",
      desc: "Integração perfeita com salas executivas de alto padrão."
    },
    {
      id: 3,
      title: "Quadro Branco Liso - Sala de Aula",
      category: "educacional",
      categoryLabel: "Educacional & Aulas",
      image: "Quadro Branco Liso/Sala de Aula.png",
      desc: "Ideal para instituições de ensino, escolas e universidades."
    },
    {
      id: 4,
      title: "Quadro Branco Liso - Home Office Compacto",
      category: "homeoffice",
      categoryLabel: "Home Office",
      image: "Quadro Branco Liso/Home Officie.png",
      desc: "Solução ergonômica e prática para estações de trabalho remotas."
    },
    {
      id: 5,
      title: "Quadro Branco Liso - Home Office 01",
      category: "homeoffice",
      categoryLabel: "Home Office",
      image: "Quadro Branco Liso/Home Officie 01.png",
      desc: "Design minimalista que se integra à decoração da sua residência."
    },
    {
      id: 6,
      title: "Quadro Branco Cerâmico Vitrificado",
      category: "especiais",
      categoryLabel: "Especiais (Cerâmico)",
      image: "Quadro Branco Liso/Cerâmico.png",
      desc: "Superfície em esmalte cerâmico vitrificado de alta resistência a riscos."
    },
    {
      id: 7,
      title: "Quadro Branco Cerâmico Premium",
      category: "especiais",
      categoryLabel: "Especiais (Cerâmico)",
      image: "Quadro Branco Liso/Cerâmico 01.png",
      desc: "Máxima durabilidade e nitidez para apresentações contínuas."
    },
    {
      id: 8,
      title: "Quadro Cerâmico Quadriculado",
      category: "especiais",
      categoryLabel: "Especiais (Quadriculado)",
      image: "Quadro Branco Liso/Cerâmico Quadriculado.png",
      desc: "Grade quadriculada impressa sob o laminado para gráficos e tabelas."
    },
    {
      id: 9,
      title: "Quadro Branco Magnético LousaTec®",
      category: "especiais",
      categoryLabel: "Especiais (Magnético)",
      image: "Quadro Branco Liso/Magnético.png",
      desc: "Permite afixar documentos e fotos com ímãs de alta pressão."
    },
    {
      id: 10,
      title: "Quadro Branco Liso - Laboratório & Pesquisa",
      category: "corporativo",
      categoryLabel: "Corporativo & Laboratório",
      image: "Quadro Branco Liso/Laboratorio.png",
      desc: "Superfície fácil de higienizar, resistente a ambientes assépticos."
    },
    {
      id: 11,
      title: "Quadro Branco Liso - Recepção Corporativa",
      category: "corporativo",
      categoryLabel: "Corporativo",
      image: "Quadro Branco Liso/Recepção.png",
      desc: "Comunicação visual e avisos para visitantes e colaboradores."
    },
    {
      id: 12,
      title: "Quadro Branco Liso - Sala de Espera",
      category: "corporativo",
      categoryLabel: "Corporativo",
      image: "Quadro Branco Liso/Sala de Espera.png",
      desc: "Organização de agendas e informações em clínicas e escritórios."
    },
    {
      id: 13,
      title: "Quadro Branco Liso - Sala de Espera Premium",
      category: "corporativo",
      categoryLabel: "Corporativo",
      image: "Quadro Branco Liso/Sala de Espera 01.png",
      desc: "Acabamento elegante para recepções médicas e corporativas."
    },
    {
      id: 14,
      title: "Quadro Branco Liso - Sala de Espera 02",
      category: "corporativo",
      categoryLabel: "Corporativo",
      image: "Quadro Branco Liso/Sala de Espera 02.png",
      desc: "Disponível em diversas opções de modulação e tamanho."
    },
    {
      id: 15,
      title: "Quadro Branco Liso - Estudo & Foco",
      category: "homeoffice",
      categoryLabel: "Home Office",
      image: "Quadro Branco Liso/01.png",
      desc: "Excelente para planejamento pessoal, metas e rotinas de estudo."
    },
    {
      id: 16,
      title: "Quadro Branco Liso Modular Ambientes",
      category: "corporativo",
      categoryLabel: "Corporativo",
      image: "Quadro Branco Liso/aba9b81f-d0e2-4eee-b944-70b255856c2c.png",
      desc: "Modulação contínua para grandes extensões de escrita."
    },
    {
      id: 17,
      title: "Quadro Branco Liso Institucional",
      category: "educacional",
      categoryLabel: "Educacional",
      image: "Quadro Branco Liso/ada61430-a092-475c-af95-83a48682f617.png",
      desc: "Construção robusta com 3 anos de garantia contratual."
    }
  ];

  // Molduras Dataset (8 Images from 'Molduras')
  const frameOptions = [
    {
      id: "anodizada",
      name: "Anodizado Fosco",
      badge: "Alumínio Anodizado",
      img1: "Molduras/Moldura - Anodizada 0001.jpg",
      img2: "Molduras/Moldura - Anodizada 0002.jpg",
      desc: "Tratamento eletroquímico que aumenta a dureza do alumínio. Visual técnico e acabamento acetinado suave."
    },
    {
      id: "preto",
      name: "Preto Epóxi Premium",
      badge: "Pintura Epóxi",
      img1: "Molduras/Moldura - Preto 0001.jpg",
      img2: "Molduras/Moldura - Preto 0002.jpg",
      desc: "Pintura epóxi eletrostática curada em estufa. Tom preto intenso com alto contraste para ambientes modernos."
    },
    {
      id: "branco",
      name: "Branco Epóxi Clean",
      badge: "Pintura Epóxi",
      img1: "Molduras/Moldura - Branco 0001.jpg",
      img2: "Molduras/Moldura - Branco 0002.jpg",
      desc: "Minimalismo puro. A moldura se funde de maneira harmoniosa com paredes claras e arquitetura clean."
    },
    {
      id: "natural",
      name: "Alumínio Natural",
      badge: "Alumínio Extrudado",
      img1: "Molduras/Moldura - Natural 0001.jpg",
      img2: "Molduras/Moldura - Natural 0002.jpg",
      desc: "Brilho metálico sutil com frisos longitudinais evidentes. Ideal para espaços práticos e dinâmicos."
    }
  ];

  // Modulation Table Dataset
  const modulationData = [
    {
      category: "Compactos",
      type: "compactos",
      dimensions: "60x40 · 70x50 · 90x60 · 100x80 · 120x90 · 120x100 · 150x120 cm",
      application: "Home Office, cozinhas, quartos infantis e painéis de KPI rápidos.",
      shipping: "Peça única pronta para fixação (Kit buchas/parafusos incluso)."
    },
    {
      category: "Médios",
      type: "medios",
      dimensions: "180x120 · 200x120 · 250x120 · 300x120 cm",
      application: "Salas de reunião corporativas, salas de treinamento e salas de aula padrão.",
      shipping: "Transporte reforçado em embalagem individual de alta proteção."
    },
    {
      category: "Modulares (Até 6m)",
      type: "modulares",
      dimensions: "350x120 · 400x120 · 450x120 · 500x120 · 550x120 · 600x120 cm",
      application: "Auditórios acadêmicos, salas de planejamento ágil e espaços coworking.",
      shipping: "Sistema Modular Inteligente: enviado em 2 seções com junção milimétrica invisível."
    }
  ];

  // 2. DOM ELEMENTS
  const themeToggleBtn = document.getElementById('themeToggle');
  const galleryGrid = document.getElementById('galleryGrid');
  const galleryFilterBtns = document.querySelectorAll('.gallery-controls .filter-btn');
  const frameOptionsContainer = document.getElementById('frameOptions');
  const framePreviewImg = document.getElementById('framePreviewImg');
  const framePreviewTitle = document.getElementById('framePreviewTitle');
  const framePreviewDesc = document.getElementById('framePreviewDesc');
  const modulationTableBody = document.getElementById('modulationTableBody');
  const modulationFilterBtns = document.querySelectorAll('.modulation-controls .filter-btn');
  
  // Lightbox Modal Elements
  const imageModal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const modalCaption = document.getElementById('modalCaption');
  const modalCloseBtn = document.getElementById('modalClose');

  // 3. THEME TOGGLE FUNCTIONALITY
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    
    const icon = themeToggleBtn.querySelector('.theme-icon');
    const text = themeToggleBtn.querySelector('.theme-text');
    const headerLogo = document.getElementById('headerLogoImg');
    const footerLogo = document.getElementById('footerLogoImg');
    
    if (newTheme === 'light') {
      icon.textContent = '☀️';
      text.textContent = 'Modo Claro';
      if (headerLogo) headerLogo.src = 'logo-afortec-light.png';
      if (footerLogo) footerLogo.src = 'logo-afortec-light.png';
    } else {
      icon.textContent = '🌙';
      text.textContent = 'Modo Escuro';
      if (headerLogo) headerLogo.src = 'logo-afortec-dark.png';
      if (footerLogo) footerLogo.src = 'logo-afortec-dark.png';
    }
  });

  // 4. RENDER GALLERY ITEMS
  function renderGallery(filter = 'all') {
    galleryGrid.innerHTML = '';
    
    const filtered = filter === 'all' 
      ? galleryItems 
      : galleryItems.filter(item => item.category === filter);
      
    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'gallery-item';
      card.innerHTML = `
        <div class="gallery-thumb">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
          <div class="gallery-overlay">
            <span class="btn-primary" style="padding: 8px 16px; font-size: 12px;">Ampliar Imagem 🔍</span>
          </div>
        </div>
        <div class="gallery-info">
          <span class="gallery-category">${item.categoryLabel}</span>
          <h4 class="gallery-title">${item.title}</h4>
        </div>
      `;
      
      card.addEventListener('click', () => openModal(item.image, `${item.title} - ${item.desc}`));
      galleryGrid.appendChild(card);
    });
  }

  // Gallery Filter Clicks
  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      galleryFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.getAttribute('data-filter'));
    });
  });

  // 5. RENDER MOLDURAS SIMULATOR
  function renderFrameSimulator() {
    frameOptionsContainer.innerHTML = '';
    
    frameOptions.forEach((frame, idx) => {
      const option = document.createElement('div');
      option.className = `frame-option-card ${idx === 0 ? 'active' : ''}`;
      option.innerHTML = `
        <img src="${frame.img1}" alt="${frame.name}" class="frame-option-thumb">
        <h4 class="frame-option-name">${frame.name}</h4>
      `;
      
      option.addEventListener('click', () => {
        document.querySelectorAll('.frame-option-card').forEach(c => c.classList.remove('active'));
        option.classList.add('active');
        
        // Update Preview
        framePreviewImg.src = frame.img1;
        framePreviewTitle.textContent = frame.name;
        framePreviewDesc.textContent = frame.desc;
      });
      
      frameOptionsContainer.appendChild(option);
    });
  }

  // 6. RENDER MODULATION TABLE
  function renderModulationTable(filter = 'all') {
    modulationTableBody.innerHTML = '';
    
    const filtered = filter === 'all'
      ? modulationData
      : modulationData.filter(item => item.type === filter);
      
    filtered.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td style="font-weight: 700; color: var(--text-main);">${item.category}</td>
        <td><span class="badge-dim">${item.dimensions}</span></td>
        <td>${item.application}</td>
        <td style="font-size: 13px; color: var(--accent-blue-bright);">${item.shipping}</td>
      `;
      modulationTableBody.appendChild(row);
    });
  }

  // Modulation Filter Clicks
  modulationFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modulationFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderModulationTable(btn.getAttribute('data-mod'));
    });
  });

  // 7. LIGHTBOX MODAL LOGIC
  function openModal(imgSrc, captionText) {
    modalImg.src = imgSrc;
    modalCaption.textContent = captionText;
    imageModal.classList.add('active');
  }

  modalCloseBtn.addEventListener('click', () => {
    imageModal.classList.remove('active');
  });

  imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
      imageModal.classList.remove('active');
    }
  });

  // INITIALIZATION
  renderGallery();
  renderFrameSimulator();
  renderModulationTable();
});
