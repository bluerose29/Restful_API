import {
  getEvents,
  getById,
  creatEvent,
  updateEvent,
  deleteEvent as _deleteEvent,
} from "../data/events/index.js";

const getAllEvents = async (req, res, next) => {
  try {
    const eventlist = await getEvents();
    res.send(eventlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getEvent = async (req, res, next) => {
  try {
    const eventId = req.params.id;
    const event = await getById(eventId);
    res.send(event);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addEvent = async (req, res, next) => {
  try {
    const data = req.body;
    const insert = await creatEvent(data);
    res.send(insert);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updatEvent = async (req, res, next) => {
  try {
    const eventId = req.params.id;
    const data = req.body;
    const updated = await updateEvent(eventId, data);
    res.send(updated);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteEvent = async (req, res, next) => {
  try {
    const eventId = req.params.id;
    const deletedEvent = await _deleteEvent(eventId);
    res.send(deletedEvent);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export default {
  getAllEvents,
  getEvent,
  addEvent,
  updatEvent,
  deleteEvent,
};
