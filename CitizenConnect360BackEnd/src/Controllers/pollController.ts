import { DbHelper } from "../DatabaseHelper";
import { Request, Response } from "express";
import { v4 as uid } from "uuid";
import { ExtendedRequest } from "../Middleware";
import { FullPoll, Poll, pollchoices } from "../Models/pollModel";
import { pollSchema } from "../Helper";

const dbInstance = new DbHelper();
//For adding a poll
export async function addPoll(req: ExtendedRequest, res: Response) {
  try {
    const pollId = uid();
    const userid = req.info?.Sub;
    const { pollQuestion, pollChoices } = req.body;

    //for validation of adding polls
    const { error } = pollSchema.validate(req.body);
    if (error) {
      return res.status(400).json(error.details[0].message);
    }

    if (!userid) {
      return res.status(400).json({ message: "User ID is required" })
    }
    dbInstance.exec('addPoll', { userid, pollId, pollQuestion })
        // Insert each choice associated with the poll
        for (let choice of pollChoices) {
            const choiceid = uid()
            dbInstance.exec('addChoice', { choiceid, pollId, choice })
        }
        
        res.status(200).json({ message: "Poll added successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
}
//For getting all polls
export async function getAllPolls(req: Request, res: Response) {
  try {
    const polls = (await dbInstance.exec("getAllPolls", {})).recordset as Poll[]
    const choices = (await dbInstance.exec("getChoices", {})).recordset as pollchoices[]
    if (polls.length == 0) {
      res.status(404).json({Message:"No Polls Available" })
    } else if(choices.length == 0){
      res.status(404).json({ Message: "No Polls Available" })
    }
    let allPolls:FullPoll[] = []
    let allChoices:pollchoices[] = []

    for(let poll of polls){
        allChoices = choices.filter(c=> c.pollId === poll.pollId)
        const singlePoll:FullPoll ={
            poll:poll,
            pollChoices:allChoices
        }
        allPolls.push(singlePoll)
    }
    console.log(allPolls)

    return res.status(200).json(allPolls)

  } catch (error) {
    res.status(500).json(error);
  }
}
//for a specific poll
export async function getPoll(req: Request<{ id: string }>, res: Response) {
  try {
    const poll = (await dbInstance.exec("getPoll", { pollId: req.params.id })).recordset as FullPoll[];
    if (poll.length > 0) {
      res.status(200).json(poll);
    } else {
      res.status(404).json({ Message: "Poll Not Found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}
//For getting all polls by a specific user
export async function getPollsByUser(
  req: Request<{ id: string }>,
  res: Response
) {
  try {
    const userspolls = (
      await dbInstance.exec("pollsByUser", { userid: req.params.id })).recordset as FullPoll[];
    if (userspolls.length > 0) {
      res.status(200).json(userspolls);
    } else {
      res.status(404).json({ Message: "No Polls Created By this User" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}
//Deleting A Poll
export async function deletePoll(req: Request<{ id: string }>, res: Response) {
  try {
    // Check if the poll exists
    const pollExists = await dbInstance.exec("checkPollExists", {
      pollId: req.params.id,
    });

    if (!pollExists.recordset.length) {
      return res.status(404).json({ Message: "Poll not found" });
    }

    // Update isDeleted to 1
    await dbInstance.exec("updatePollIsDeleted", { pollId: req.params.id });

    res.status(200).json({ Message: "Poll Deleted Successfully!!!" });
  } catch (error) {
    res.status(500).json(error);
  }
}
