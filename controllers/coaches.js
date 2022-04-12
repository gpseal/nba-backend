import Coach from '../models/coaches.js'
import Team from '../models/teams.js'

const displayData = (dataName, response) => {
  //function to display data
  if (dataName.length === 0) {
    //display error if empty array is returned
    return response
      .status(410)
      .json({ success: false, msg: 'No content currently available' })
  } else return response.status(200).json({ success: true, data: dataName })
}

const errorMsg = (response, err) => {
  //function to display 500 error message
  return response.status(500).json({
    msg: err.message || 'Something went wrong while getting all coaches'
  })
}

const noID = (response, id) => {
  return response.status(404).json({
    success: false,
    msg: `No coach with the id ${id}`
  })
}

const getCoaches = async (req, res) => {
  let sortOrder = -1
  let query = req.query

  if (req.query.order_by == 'asc') {
    sortOrder = 1
  }

  try {
    //sort coaches by URL query (eg "api/coaches?sort_by=position&order_by=des")
    if (query.sort_by != null) {
      switch (query.sort_by) {
        case 'firstName': {
          const coaches = await Coach.find({}).sort({ firstName: sortOrder })
          displayData(coaches, res)
          return
        }
        case 'lastName':
          {
            const coaches = await Coach.find({}).sort({ lastName: sortOrder })
            displayData(coaches, res)
            return
          }
          break
        case 'age':
          {
            const coaches = await Coach.find({}).sort({ age: sortOrder })
            displayData(coaches, res)
            return
          }
          break
        case 'careerWins':
          {
            const coaches = await Coach.find({}).sort({ careerWins: sortOrder })
            displayData(coaches, res)
            return
          }
          break
        case 'careerLosses':
          {
            const coaches = await Coach.find({}).sort({
              careerLosses: sortOrder
            })
            displayData(coaches, res)
            return
          }
          break
        case 'team':
          {
            const coaches = await Coach.find({}).sort({ team: sortOrder })
            displayData(coaches, res)
            return
          }
          break
        default:
          res.status(404).json({
            msg: 'Category does not exist'
          })
          return
          break
      }
    }
    //filter data by URL query (eg "api/coaches?age=25")
    else {
      const { limit = 5 } = req.query //sets defaults of page limit
      const coaches = await Coach.find(query) //display items that match query search
        .limit(limit) //sets limit to be displayed
        .skip((query.page - 1) * limit) //sets page to be displayed
      displayData(coaches, res)
    }
  } catch (err) {
    errorMsg(res, err)
  }
}

const getCoachByID = async (req, res) => {
  try {
    const { id } = req.params
    const coach = await Coach.findById(id)

    if (!coach) {
      return noID(res, id)
    }

    displayData(coach, res)
  } catch (err) {
    errorMsg(res, err)
  }
}

const createCoach = async (req, res) => {
  try {
    const coach = new Coach(req.body)
    await coach.save()

    // Find a team by its id, then push the created coach to its list of coaches.
    const team = await Team.findById({
      _id: coach.team
    })
    team.coach = coach

    await team.save()

    const newCoaches = await Coach.find({})

    displayData(newCoaches, res)
  } catch (err) {
    errorMsg(res, err)
  }
}

const updateCoach = async (req, res) => {
  try {
    const { id } = req.params
    const coach = await Coach.findByIdAndUpdate(id, req.body) //find section to update
    const updatedCoach = await Coach.findById(id)

    // Check if coach does exist, return fail message if not
    if (!coach) {
      return noID(res, id)
    }

    displayData(updatedCoach, res)
  } catch (err) {
    errorMsg(res, err)
  }
}

const deleteCoach = async (req, res) => {
  try {
    const { id } = req.params
    const coach = await Coach.findByIdAndRemove(id)
    const newCoaches = await Coach.find({})

    if (!coach) {
      return noID(res, id)
    }

    displayData(newCoaches, res)
  } catch (err) {
    errorMsg(res, err)
  }
}

export { getCoaches, createCoach, updateCoach, getCoachByID, deleteCoach }
