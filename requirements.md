We want to be able to track the user's end of session in all manner or weird conditions:

    network disconnect

    system hangs

    browser hangs

    browser tab close (i.e. ⌘+w or click the close tab button)

    browser window close (i.e. ⇧ ⌘ w or click close window button)

    browser kill (i.e. kill with sigterm/sigkill)

    computer going to sleep

    tab going to sleep (i.e. men zip + stop process)

The SPIKE should investigate all of those scenarios and solutions and try to figure out a combination of approaches to best support the notion of session duration and time

The spike should have subtasks that can be assigned to different people to build different parts of the solution as a POC and then combine them into one cohesive approach and abstract it as part of the observability repository for FE.