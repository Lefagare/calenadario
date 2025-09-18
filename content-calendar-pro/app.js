// Content Calendar Pro - Application Logic

class ContentCalendarApp {
    constructor() {
        this.posts = [];
        this.currentDate = new Date();
        this.currentView = 'calendar';
        this.selectedTemplate = null;
        this.editingPost = null;

        // Data from JSON
        this.socialPlatforms = [
            {
                name: "Instagram",
                icon: "📸",
                best_times: ["11:00-13:00", "19:00-21:00"],
                content_types: ["Posts", "Stories", "Reels", "IGTV"],
                direct_link: "https://www.instagram.com",
                color: "#E4405F"
            },
            {
                name: "TikTok", 
                icon: "🎵",
                best_times: ["06:00-10:00", "19:00-21:00"],
                content_types: ["Videos", "Live"],
                direct_link: "https://www.tiktok.com",
                color: "#000000"
            },
            {
                name: "Facebook",
                icon: "👥", 
                best_times: ["13:00-15:00"],
                content_types: ["Posts", "Stories", "Videos", "Events"],
                direct_link: "https://www.facebook.com",
                color: "#1877F2"
            },
            {
                name: "LinkedIn",
                icon: "💼",
                best_times: ["08:00-10:00", "12:00-14:00"],
                content_types: ["Posts", "Articles", "Stories"],
                direct_link: "https://www.linkedin.com",
                color: "#0A66C2"
            },
            {
                name: "Twitter/X",
                icon: "🐦",
                best_times: ["08:00-10:00", "19:00-21:00"],
                content_types: ["Tweets", "Threads", "Spaces"],
                direct_link: "https://www.x.com",
                color: "#1DA1F2"
            },
            {
                name: "YouTube",
                icon: "📺",
                best_times: ["14:00-16:00", "20:00-22:00"],
                content_types: ["Videos", "Shorts", "Live"],
                direct_link: "https://www.youtube.com",
                color: "#FF0000"
            }
        ];

        this.funnelStages = [
            {
                stage: "Awareness",
                description: "Generar conocimiento de marca",
                content_types: ["Educational posts", "Industry insights", "Trending topics"],
                color: "#FF6B6B"
            },
            {
                stage: "Interest",
                description: "Despertar interés en productos/servicios",
                content_types: ["Product showcases", "Behind the scenes", "Tutorials"],
                color: "#4ECDC4"
            },
            {
                stage: "Consideration",
                description: "Evaluación de opciones",
                content_types: ["Comparisons", "Reviews", "Case studies"],
                color: "#45B7D1"
            },
            {
                stage: "Intent",
                description: "Intención de compra",
                content_types: ["Demos", "Free trials", "Consultations"],
                color: "#96CEB4"
            },
            {
                stage: "Purchase",
                description: "Conversión a cliente",
                content_types: ["Offers", "Promotions", "Testimonials"],
                color: "#FECA57"
            },
            {
                stage: "Retention",
                description: "Fidelización y repeat business",
                content_types: ["Customer stories", "Loyalty programs", "Updates"],
                color: "#FF9FF3"
            }
        ];

        this.contentTemplates = [
            {
                name: "Educational Post",
                template: "🎓 [TOPIC]: [KEY INSIGHT]\n\n📍 Puntos clave:\n• [PUNTO 1]\n• [PUNTO 2] \n• [PUNTO 3]\n\n💡 Consejo pro: [TIP]\n\n❓ ¿Cuál es tu experiencia con [TOPIC]? ¡Comenta abajo!\n\n#educacion #tips #[INDUSTRIA]",
                funnel_stage: "Awareness"
            },
            {
                name: "Behind the Scenes",
                template: "🎬 Detrás de cámaras: [ACTIVIDAD]\n\n[HISTORIA PERSONAL O INSIGHT]\n\n✨ Por esto hacemos lo que hacemos:\n[MOTIVACIÓN/PROPÓSITO]\n\n🤝 ¡Etiqueta a alguien a quien le encantaría ver esto!\n\n#detrasdelacamara #autenticidad #[MARCA]",
                funnel_stage: "Interest"
            },
            {
                name: "Social Proof",
                template: "🌟 Cliente Destacado: [NOMBRE DEL CLIENTE]\n\n💬 \"[TESTIMONIO]\"\n\n📈 Resultados obtenidos:\n✅ [RESULTADO 1]\n✅ [RESULTADO 2]\n✅ [RESULTADO 3]\n\n💭 ¿Quieres resultados similares? [CTA]\n\n#testimonio #resultados #exito",
                funnel_stage: "Consideration"
            },
            {
                name: "Promotional",
                template: "🚀 [NOMBRE DE OFERTA/PRODUCTO]\n\n🎁 Oferta especial: [DESCUENTO/BONUS]\n\n⏰ Tiempo limitado: [FECHA LÍMITE]\n\n📋 Lo que obtienes:\n• [BENEFICIO 1]\n• [BENEFICIO 2]\n• [BENEFICIO 3]\n\n👆 ¡Link en bio o envíanos un DM!\n\n#oferta #limitado #[PRODUCTO]",
                funnel_stage: "Purchase"
            }
        ];

        // Sample posts
        this.posts = [
            {
                id: 1,
                date: "2025-01-19",
                time: "09:00",
                platform: "LinkedIn",
                content: "🎓 Automatización de Marketing: El cambio de juego para empresas 2025\n\n📍 Puntos clave:\n• Ahorra 20+ horas mensuales\n• Aumenta ROI en 40%\n• Mejora la calidad de leads\n\n💡 Consejo pro: ¡Empieza con secuencias de email!\n\n❓ ¿Cuál es tu experiencia con automatización? ¡Comenta abajo!",
                funnel_stage: "Awareness",
                status: "scheduled"
            },
            {
                id: 2,
                date: "2025-01-19",
                time: "14:00", 
                platform: "Instagram",
                content: "🎬 Detrás de cámaras: Creando estrategias de contenido viral\n\nPasé 3 horas analizando 500+ posts virales para encontrar patrones. La magia no es suerte—¡es entender la psicología!\n\n✨ Por esto hacemos lo que hacemos:\nAyudar a las empresas a conectar auténticamente con su audiencia\n\n🤝 ¡Etiqueta a alguien a quien le encantaría ver esto!",
                funnel_stage: "Interest",
                status: "draft"
            },
            {
                id: 3,
                date: "2025-01-20",
                time: "11:00",
                platform: "TikTok",
                content: "3 herramientas de automatización que cambiaron mi negocio 🚀\n1. SocialBee para programación\n2. HubSpot para emails  \n3. ChatGPT para copy\n\n¿Cuál quieres probar primero? 👇",
                funnel_stage: "Interest", 
                status: "scheduled"
            },
            {
                id: 4,
                date: "2025-01-20",
                time: "19:00",
                platform: "Instagram",
                content: "🌟 Cliente Destacado: Boutique de María\n\n💬 \"¡Nuestro ROI en redes sociales mejoró 300% en 3 meses!\"\n\n📈 Resultados obtenidos:\n✅ 50K nuevos seguidores\n✅ 300% aumento de ROI\n✅ 25% más ventas\n\n💭 ¿Quieres resultados similares? ¡Envíanos un DM!",
                funnel_stage: "Consideration",
                status: "published"
            }
        ];

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.populateFormSelectors();
        this.populateSocialLinks();
        this.populateFilters();
        this.renderCurrentView();
        this.updateCharacterCount();
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const view = e.target.closest('.nav-btn').dataset.view;
                this.switchView(view);
            });
        });

        // Calendar navigation
        document.getElementById('prevMonth').addEventListener('click', () => {
            this.currentDate.setMonth(this.currentDate.getMonth() - 1);
            this.renderCalendar();
        });

        document.getElementById('nextMonth').addEventListener('click', () => {
            this.currentDate.setMonth(this.currentDate.getMonth() + 1);
            this.renderCalendar();
        });

        // Modal controls
        document.getElementById('addPostBtn').addEventListener('click', () => {
            this.openPostModal();
        });

        document.getElementById('closeModal').addEventListener('click', () => {
            this.closePostModal();
        });

        document.getElementById('cancelBtn').addEventListener('click', () => {
            this.closePostModal();
        });

        document.getElementById('saveBtn').addEventListener('click', () => {
            this.savePost();
        });

        document.getElementById('deleteBtn').addEventListener('click', () => {
            this.deletePost();
        });

        // Template modal
        document.getElementById('closeTemplateModal').addEventListener('click', () => {
            this.closeTemplateModal();
        });

        document.getElementById('cancelTemplateBtn').addEventListener('click', () => {
            this.closeTemplateModal();
        });

        document.getElementById('useTemplateBtn').addEventListener('click', () => {
            this.useTemplate();
        });

        // Form inputs
        document.getElementById('postContent').addEventListener('input', () => {
            this.updateCharacterCount();
        });

        // Filters and search
        document.getElementById('platformFilter').addEventListener('change', () => {
            this.renderCurrentView();
        });

        document.getElementById('funnelFilter').addEventListener('change', () => {
            this.renderCurrentView();
        });

        document.getElementById('searchInput').addEventListener('input', () => {
            this.renderCurrentView();
        });

        // Export
        document.getElementById('exportBtn').addEventListener('click', () => {
            this.exportData();
        });

        // Notification close
        document.getElementById('closeNotification').addEventListener('click', () => {
            this.hideNotification();
        });

        // Close modal on backdrop click
        document.getElementById('postModal').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                this.closePostModal();
            }
        });

        document.getElementById('templateModal').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                this.closeTemplateModal();
            }
        });
    }

    populateFormSelectors() {
        // Populate platform selector
        const platformSelect = document.getElementById('postPlatform');
        platformSelect.innerHTML = '<option value="">Seleccionar plataforma</option>';
        this.socialPlatforms.forEach(platform => {
            const option = document.createElement('option');
            option.value = platform.name;
            option.textContent = `${platform.icon} ${platform.name}`;
            platformSelect.appendChild(option);
        });

        // Populate funnel stage selector
        const funnelSelect = document.getElementById('postFunnelStage');
        funnelSelect.innerHTML = '<option value="">Seleccionar etapa</option>';
        this.funnelStages.forEach(stage => {
            const option = document.createElement('option');
            option.value = stage.stage;
            option.textContent = `${stage.stage} - ${stage.description}`;
            funnelSelect.appendChild(option);
        });
    }

    populateSocialLinks() {
        const socialLinks = document.getElementById('socialLinks');
        socialLinks.innerHTML = '';
        
        this.socialPlatforms.forEach(platform => {
            const link = document.createElement('a');
            link.className = 'social-link';
            link.href = platform.direct_link;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            
            link.innerHTML = `
                <span class="social-icon">${platform.icon}</span>
                <span>${platform.name}</span>
                <i class="fas fa-external-link-alt" style="margin-left: auto; font-size: 12px; opacity: 0.6;"></i>
            `;
            
            // Ensure link functionality
            link.addEventListener('click', (e) => {
                e.preventDefault();
                window.open(platform.direct_link, '_blank', 'noopener,noreferrer');
            });
            
            socialLinks.appendChild(link);
        });
    }

    populateFilters() {
        // Platform filter
        const platformFilter = document.getElementById('platformFilter');
        platformFilter.innerHTML = '<option value="">Todas las plataformas</option>';
        this.socialPlatforms.forEach(platform => {
            const option = document.createElement('option');
            option.value = platform.name;
            option.textContent = platform.name;
            platformFilter.appendChild(option);
        });

        // Funnel filter
        const funnelFilter = document.getElementById('funnelFilter');
        funnelFilter.innerHTML = '<option value="">Todas las etapas</option>';
        this.funnelStages.forEach(stage => {
            const option = document.createElement('option');
            option.value = stage.stage;
            option.textContent = stage.stage;
            funnelFilter.appendChild(option);
        });
    }

    switchView(viewName) {
        // Update navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-view="${viewName}"]`).classList.add('active');

        // Update views
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });
        document.getElementById(`${viewName}View`).classList.add('active');

        this.currentView = viewName;
        this.renderCurrentView();
    }

    renderCurrentView() {
        switch(this.currentView) {
            case 'calendar':
                this.renderCalendar();
                break;
            case 'templates':
                this.renderTemplates();
                break;
            case 'analytics':
                this.renderAnalytics();
                break;
        }
    }

    renderCalendar() {
        const calendar = document.getElementById('calendarGrid');
        const monthNames = [
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];

        // Update month header
        document.getElementById('currentMonth').textContent = 
            `${monthNames[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}`;

        // Clear calendar
        calendar.innerHTML = '';

        // Add day headers
        const dayHeaders = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
        dayHeaders.forEach(day => {
            const header = document.createElement('div');
            header.className = 'calendar-day-header';
            header.textContent = day;
            calendar.appendChild(header);
        });

        // Get first day of month and number of days
        const firstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
        const lastDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());

        // Generate calendar days
        for (let i = 0; i < 42; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            
            if (date.getMonth() !== this.currentDate.getMonth()) {
                dayElement.classList.add('other-month');
            }
            
            if (this.isToday(date)) {
                dayElement.classList.add('today');
            }

            const dayNumber = document.createElement('div');
            dayNumber.className = 'calendar-day-number';
            dayNumber.textContent = date.getDate();
            dayElement.appendChild(dayNumber);

            const postsContainer = document.createElement('div');
            postsContainer.className = 'calendar-posts';
            
            // Get filtered posts for this day
            const dayPosts = this.getFilteredPosts().filter(post => {
                return post.date === this.formatDate(date);
            });

            dayPosts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = `calendar-post ${post.platform.toLowerCase().replace('/', '').replace(' ', '')}`;
                postElement.innerHTML = `
                    <div class="post-time">${post.time}</div>
                    <div class="post-platform">${post.platform}</div>
                `;
                postElement.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.editPost(post);
                });
                postsContainer.appendChild(postElement);
            });

            dayElement.appendChild(postsContainer);
            
            // Add click handler for day
            dayElement.addEventListener('click', () => {
                this.openPostModal(date);
            });

            calendar.appendChild(dayElement);
        }
    }

    renderTemplates() {
        const templatesGrid = document.getElementById('templatesGrid');
        templatesGrid.innerHTML = '';

        this.contentTemplates.forEach(template => {
            const card = document.createElement('div');
            card.className = 'template-card';
            
            const stage = this.funnelStages.find(s => s.stage === template.funnel_stage);
            
            card.innerHTML = `
                <div class="template-header">
                    <h3 class="template-name">${template.name}</h3>
                    <div class="template-stage funnel-${template.funnel_stage.toLowerCase()}">${template.funnel_stage}</div>
                </div>
                <div class="template-content">${template.template}</div>
            `;

            card.addEventListener('click', () => {
                this.openTemplateModal(template);
            });

            templatesGrid.appendChild(card);
        });
    }

    renderAnalytics() {
        this.renderPlatformStats();
        this.renderFunnelStats();
        this.renderStatusStats();
    }

    renderPlatformStats() {
        const container = document.getElementById('platformStats');
        const stats = {};
        
        this.getFilteredPosts().forEach(post => {
            stats[post.platform] = (stats[post.platform] || 0) + 1;
        });

        container.innerHTML = '';
        Object.entries(stats).forEach(([platform, count]) => {
            const platformData = this.socialPlatforms.find(p => p.name === platform);
            const item = document.createElement('div');
            item.className = 'stat-item';
            item.innerHTML = `
                <div class="stat-label">
                    <span>${platformData?.icon || '📱'}</span>
                    <span>${platform}</span>
                </div>
                <div class="stat-value">${count}</div>
            `;
            container.appendChild(item);
        });
    }

    renderFunnelStats() {
        const container = document.getElementById('funnelStats');
        const stats = {};
        
        this.getFilteredPosts().forEach(post => {
            stats[post.funnel_stage] = (stats[post.funnel_stage] || 0) + 1;
        });

        container.innerHTML = '';
        Object.entries(stats).forEach(([stage, count]) => {
            const item = document.createElement('div');
            item.className = 'stat-item';
            item.innerHTML = `
                <div class="stat-label">
                    <span class="template-stage funnel-${stage.toLowerCase()}" style="padding: 2px 8px; border-radius: 12px; font-size: 10px;">${stage}</span>
                </div>
                <div class="stat-value">${count}</div>
            `;
            container.appendChild(item);
        });
    }

    renderStatusStats() {
        const container = document.getElementById('statusStats');
        const stats = {};
        
        this.getFilteredPosts().forEach(post => {
            stats[post.status] = (stats[post.status] || 0) + 1;
        });

        const statusLabels = {
            draft: 'Borrador',
            scheduled: 'Programado',
            published: 'Publicado'
        };

        container.innerHTML = '';
        Object.entries(stats).forEach(([status, count]) => {
            const item = document.createElement('div');
            item.className = 'stat-item';
            item.innerHTML = `
                <div class="stat-label">
                    <span class="status status--${status === 'draft' ? 'warning' : status === 'scheduled' ? 'info' : 'success'}">${statusLabels[status]}</span>
                </div>
                <div class="stat-value">${count}</div>
            `;
            container.appendChild(item);
        });
    }

    getFilteredPosts() {
        let filtered = [...this.posts];
        
        const platformFilter = document.getElementById('platformFilter').value;
        const funnelFilter = document.getElementById('funnelFilter').value;
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();

        if (platformFilter) {
            filtered = filtered.filter(post => post.platform === platformFilter);
        }

        if (funnelFilter) {
            filtered = filtered.filter(post => post.funnel_stage === funnelFilter);
        }

        if (searchTerm) {
            filtered = filtered.filter(post => 
                post.content.toLowerCase().includes(searchTerm) ||
                post.platform.toLowerCase().includes(searchTerm)
            );
        }

        return filtered;
    }

    openPostModal(date = null) {
        this.editingPost = null;
        document.getElementById('modalTitle').textContent = 'Nuevo Post';
        document.getElementById('postForm').reset();
        document.getElementById('postId').value = '';
        document.getElementById('deleteBtn').style.display = 'none';
        
        if (date) {
            document.getElementById('postDate').value = this.formatDate(date);
        }

        document.getElementById('postModal').classList.remove('hidden');
        this.updateCharacterCount();
    }

    editPost(post) {
        this.editingPost = post;
        document.getElementById('modalTitle').textContent = 'Editar Post';
        document.getElementById('postId').value = post.id;
        document.getElementById('postDate').value = post.date;
        document.getElementById('postTime').value = post.time;
        document.getElementById('postPlatform').value = post.platform;
        document.getElementById('postContent').value = post.content;
        document.getElementById('postFunnelStage').value = post.funnel_stage;
        document.getElementById('postStatus').value = post.status;
        document.getElementById('deleteBtn').style.display = 'block';

        document.getElementById('postModal').classList.remove('hidden');
        this.updateCharacterCount();
    }

    closePostModal() {
        document.getElementById('postModal').classList.add('hidden');
        this.editingPost = null;
    }

    savePost() {
        const form = document.getElementById('postForm');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const postData = {
            id: this.editingPost ? this.editingPost.id : Date.now(),
            date: document.getElementById('postDate').value,
            time: document.getElementById('postTime').value,
            platform: document.getElementById('postPlatform').value,
            content: document.getElementById('postContent').value,
            funnel_stage: document.getElementById('postFunnelStage').value,
            status: document.getElementById('postStatus').value
        };

        if (this.editingPost) {
            const index = this.posts.findIndex(p => p.id === this.editingPost.id);
            this.posts[index] = postData;
            this.showNotification('Post actualizado exitosamente', 'success');
        } else {
            this.posts.push(postData);
            this.showNotification('Post creado exitosamente', 'success');
        }

        this.closePostModal();
        this.renderCurrentView();
    }

    deletePost() {
        if (!this.editingPost) return;
        
        if (confirm('¿Estás seguro de que quieres eliminar este post?')) {
            this.posts = this.posts.filter(p => p.id !== this.editingPost.id);
            this.showNotification('Post eliminado exitosamente', 'success');
            this.closePostModal();
            this.renderCurrentView();
        }
    }

    openTemplateModal(template) {
        this.selectedTemplate = template;
        document.getElementById('templateName').textContent = template.name;
        document.getElementById('templateContent').textContent = template.template;
        
        const stage = this.funnelStages.find(s => s.stage === template.funnel_stage);
        const stageElement = document.getElementById('templateFunnelStage');
        stageElement.textContent = template.funnel_stage;
        stageElement.className = `template-funnel-stage funnel-${template.funnel_stage.toLowerCase()}`;
        
        document.getElementById('templateModal').classList.remove('hidden');
    }

    closeTemplateModal() {
        document.getElementById('templateModal').classList.add('hidden');
        this.selectedTemplate = null;
    }

    useTemplate() {
        if (!this.selectedTemplate) return;
        
        // Close template modal first
        this.closeTemplateModal();
        
        // Open post modal
        this.openPostModal();
        
        // Wait for modal to fully open, then populate content
        setTimeout(() => {
            const contentField = document.getElementById('postContent');
            const funnelField = document.getElementById('postFunnelStage');
            
            if (contentField && funnelField) {
                contentField.value = this.selectedTemplate.template;
                funnelField.value = this.selectedTemplate.funnel_stage;
                this.updateCharacterCount();
                this.showNotification('Template aplicado exitosamente', 'success');
            }
        }, 100);
    }

    updateCharacterCount() {
        const contentField = document.getElementById('postContent');
        const charCount = document.getElementById('charCount');
        if (contentField && charCount) {
            charCount.textContent = contentField.value.length;
        }
    }

    exportData() {
        const data = {
            posts: this.posts,
            exported_at: new Date().toISOString(),
            total_posts: this.posts.length
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { 
            type: 'application/json' 
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `calendario-contenido-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);

        this.showNotification('Datos exportados exitosamente', 'success');
    }

    showNotification(message, type = 'success') {
        const notification = document.getElementById('notification');
        const notificationText = document.getElementById('notificationText');
        
        notificationText.textContent = message;
        notification.className = `notification ${type}`;
        notification.classList.remove('hidden');

        setTimeout(() => {
            this.hideNotification();
        }, 4000);
    }

    hideNotification() {
        document.getElementById('notification').classList.add('hidden');
    }

    formatDate(date) {
        return date.toISOString().split('T')[0];
    }

    isToday(date) {
        const today = new Date();
        return date.toDateString() === today.toDateString();
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ContentCalendarApp();
});