$(document).ready(function () {
    const jobs = [
        { title: 'Desenvolvedor Front-End', location: 'São Paulo', category: 'tech', contract: 'full-time' },
        { title: 'Designer UX/UI', location: 'Rio de Janeiro', category: 'design', contract: 'freelance' },
        { title: 'Especialista em SEO', location: 'Curitiba', category: 'marketing', contract: 'part-time' }
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
