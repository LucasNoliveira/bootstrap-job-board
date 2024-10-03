$(document).ready(function () {
    const jobs = [
        { title: 'Desenvolvedor Front-End', location: 'São Paulo', category: 'tech', contract: 'full-time' },
        { title: 'Designer UX/UI', location: 'Rio de Janeiro', category: 'design', contract: 'freelance' },
        { title: 'Especialista em SEO', location: 'Curitiba', category: 'marketing', contract: 'part-time' },
        { title: 'Gerente de Projetos', location: 'Belo Horizonte', category: 'management', contract: 'full-time' },
        { title: 'Analista de Dados', location: 'Porto Alegre', category: 'tech', contract: 'contract' },
        { title: 'Copywriter', location: 'São Paulo', category: 'marketing', contract: 'remote' },
        { title: 'Desenvolvedor Mobile', location: 'Florianópolis', category: 'tech', contract: 'full-time' },
        { title: 'Gerente de Marketing', location: 'Salvador', category: 'marketing', contract: 'part-time' },
        { title: 'Fotógrafo', location: 'Recife', category: 'creative', contract: 'freelance' },
        { title: 'Analista de Qualidade', location: 'Fortaleza', category: 'tech', contract: 'full-time' },
        { title: 'Engenheiro de Software', location: 'Brasília', category: 'tech', contract: 'full-time' },
        { title: 'Desenvolvedor Back-End', location: 'Belo Horizonte', category: 'tech', contract: 'full-time' },
        { title: 'Assistente Administrativo', location: 'São Paulo', category: 'administration', contract: 'part-time' },
        { title: 'Consultor de Vendas', location: 'Curitiba', category: 'sales', contract: 'remote' },
        { title: 'Analista de Recursos Humanos', location: 'Rio de Janeiro', category: 'management', contract: 'full-time' }
    ];
    

    function displayJobs(filteredJobs) {
        $('#job-list').empty();
        if (filteredJobs.length === 0) {
            $('#job-list').append('<p class="col-12 text-center">Nenhuma vaga encontrada.</p>');
        } else {
            filteredJobs.forEach(job => {
                $('#job-list').append(`
                    <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">${job.title}</h5>
                                <p class="card-text">${job.location}</p>
                                <p class="card-text">${job.contract}</p>
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

        const filteredJobs = jobs.filter(job => {
            return (
                (location === '' || job.location.toLowerCase().includes(location)) &&
                (category === '' || job.category === category) &&
                (contract === '' || job.contract === contract)
            );
        });

        displayJobs(filteredJobs);
    });

    // Mostrar todas as vagas no início
    displayJobs(jobs);
});
