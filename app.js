$(document).ready(function () {
    const jobs = [
        { title: 'Desenvolvedor Front-End', location: 'São Paulo', category: 'tech', contract: 'full-time', salary: 'R$ 8.000', company: 'Tech Solutions', logo: 'url_da_logo_1.png' },
        { title: 'Designer UX/UI', location: 'Rio de Janeiro', category: 'design', contract: 'freelance', salary: 'R$ 5.500', company: 'Design Co.', logo: 'url_da_logo_2.png' },
        { title: 'Especialista em SEO', location: 'Curitiba', category: 'marketing', contract: 'part-time', salary: 'R$ 4.000', company: 'Marketing Pros', logo: 'url_da_logo_3.png' },
        { title: 'Gerente de Projetos', location: 'Belo Horizonte', category: 'management', contract: 'full-time', salary: 'R$ 12.000', company: 'Project Leaders', logo: 'url_da_logo_4.png' },
        { title: 'Analista de Dados', location: 'Porto Alegre', category: 'tech', contract: 'contract', salary: 'R$ 7.500', company: 'Data Insights', logo: 'url_da_logo_5.png' },
        { title: 'Copywriter', location: 'São Paulo', category: 'marketing', contract: 'remote', salary: 'R$ 4.500', company: 'Content Creators', logo: 'url_da_logo_6.png' },
        { title: 'Desenvolvedor Mobile', location: 'Florianópolis', category: 'tech', contract: 'full-time', salary: 'R$ 9.000', company: 'Mobile Apps', logo: 'url_da_logo_7.png' },
        { title: 'Gerente de Marketing', location: 'Salvador', category: 'marketing', contract: 'part-time', salary: 'R$ 6.000', company: 'Marketing Masters', logo: 'url_da_logo_8.png' },
        { title: 'Fotógrafo', location: 'Recife', category: 'creative', contract: 'freelance', salary: 'R$ 3.000', company: 'Photo Art', logo: 'url_da_logo_9.png' },
        { title: 'Analista de Qualidade', location: 'Fortaleza', category: 'tech', contract: 'full-time', salary: 'R$ 6.500', company: 'Quality Check', logo: 'url_da_logo_10.png' },
        { title: 'Engenheiro de Software', location: 'Brasília', category: 'tech', contract: 'full-time', salary: 'R$ 10.000', company: 'Software Inc.', logo: 'url_da_logo_11.png' },
        { title: 'Desenvolvedor Back-End', location: 'Belo Horizonte', category: 'tech', contract: 'full-time', salary: 'R$ 8.500', company: 'Backend Builders', logo: 'url_da_logo_12.png' },
        { title: 'Assistente Administrativo', location: 'São Paulo', category: 'administration', contract: 'part-time', salary: 'R$ 3.500', company: 'Admin Help', logo: 'url_da_logo_13.png' },
        { title: 'Consultor de Vendas', location: 'Curitiba', category: 'sales', contract: 'remote', salary: 'R$ 4.200', company: 'Sales Pros', logo: 'url_da_logo_14.png' },
        { title: 'Analista de Recursos Humanos', location: 'Rio de Janeiro', category: 'management', contract: 'full-time', salary: 'R$ 6.000', company: 'HR Team', logo: 'url_da_logo_15.png' }
    ];

    function displaySkeleton() {
        $('#job-list').empty();
        for (let i = 0; i < 6; i++) {
            $('#job-list').append(`
                <div class="col-md-4 mb-4 skeleton">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title bg-light text-light skeleton-text"></h5>
                            <p class="card-text bg-light text-light skeleton-text"></p>
                            <p class="card-text bg-light text-light skeleton-text"></p>
                            <p class="card-text bg-light text-light skeleton-text"></p>
                        </div>
                    </div>
                </div>
            `);
        }
    }

    function displayJobs(filteredJobs) {
        $('#job-list').empty();
        if (filteredJobs.length === 0) {
            $('#job-list').append('<p class="col-12 text-center">Nenhuma vaga encontrada.</p>');
        } else {
            filteredJobs.forEach(job => {
                $('#job-list').append(`
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 border border-primary border-3">
                            <div class="card-body d-flex flex-column">
                                <div class="d-flex align-items-center mb-2">
                                    <img src="${job.logo}" alt="${job.company}" class="me-2" style="width: 30px; height: 30px;">
                                    <span class="fw-bold">${job.company}</span>
                                </div>
                                <h5 class="card-title">${job.title}</h5>
                                <div class="d-flex">
                                <p class="card-text">${job.location} - </p>
                                <p class="card-text">${job.contract}</p>
                                </div>
                                <p class="card-text text-success fw-bold">${job.salary}</p> <!-- Adiciona o salário -->
                                <div class="mt-auto d-flex">
                                    <button class="btn btn-primary w-50 me-1 mr-2">Candidatar-se</button>
                                    <button class="btn border-1 rounded btn-outline-secondary w-auto" title="Bookmark">
                                        <i class="fas fa-bookmark"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `);
            });
        }
    }
    
    $('#search-jobs').click(function () {
        const location = $('#location').val().toLowerCase();
        const category = $('#category').val();
        const contract = $('#contract').val();

        $('#spinner').removeClass('d-none');
        displaySkeleton();

        setTimeout(function () {
            const filteredJobs = jobs.filter(job => {
                return (
                    (location === '' || job.location.toLowerCase().includes(location)) &&
                    (category === '' || job.category === category) &&
                    (contract === '' || job.contract === contract)
                );
            });

            displayJobs(filteredJobs);
            $('#spinner').addClass('d-none');
        }, 1000);
    });

    // Mostrar todas as vagas no início com esqueleto temporário
    $('#spinner').removeClass('d-none'); // Mostra o spinner
    displaySkeleton();
    setTimeout(function () {
        displayJobs(jobs);
        $('#spinner').addClass('d-none'); // Oculta o spinner após o carregamento
    }, 2000);
});
