export function getLandingPage(req, res)
{

    var exam_info = [
        { name: 'Midterm', start_date: '21.07.2023\n12:00', end_date: '21.07.2023\n14:00', grade: '10'},
        { name: 'Endterm', start_date: '21.08.2023\n12:00', end_date: '21.08.2023\n14:00', grade: '10'}
    ];


    res.render("user/landing_page", {
        exam_info: exam_info,
        logged: req.session.logged
    });
}