/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { Button, Select } from "antd";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import multiMonthPlugin from "@fullcalendar/multimonth";

function CalendarComponent(props) {
  const pluginEnums = {
    dayGrid: dayGridPlugin,
    multiMonth: multiMonthPlugin,
    timeGrid: timeGridPlugin,
    list: listPlugin,
  };
  const toolbarOptions = {
    dayGrid: "dayGridDay,dayGridWeek,dayGridMonth,dayGridYear",
    multiMonth: "multiMonthYear",
    timeGrid: "timeGridDay,timeGridWeek",
    list: "listDay,listWeek,listMonth,listYear",
  };
  const pluginOptions = [
    {
      key: "dayGrid",
      value: "dayGrid",
      label: "DayGrid",
    },
    {
      key: "multiMonth",
      value: "multiMonth",
      label: "Multi Month",
    },
    {
      key: "timeGrid",
      value: "timeGrid",
      label: "Time Grid",
    },
    {
      key: "list",
      value: "list",
      label: "List",
    },
  ];
  const datGridOptions = {
    dayGrid: [
      {
        key: "dayGridDay",
        value: "dayGridDay",
        label: "DayGrid Day",
      },
      {
        key: "dayGridWeek",
        value: "dayGridWeek",
        label: "DayGrid Week",
      },
      {
        key: "dayGridMonth",
        value: "dayGridMonth",
        label: "DayGrid Month",
      },
      {
        key: "dayGridYear",
        value: "dayGridYear",
        label: "DayGrid Year",
      },
    ],
    multiMonth: [
      {
        key: "multiMonthYear",
        value: "multiMonthYear",
        label: "Multi Month Year",
      },
    ],
    timeGrid: [
      {
        key: "timeGridDay",
        value: "timeGridDay",
        label: "Time Grid Day",
      },
      {
        key: "timeGridWeek",
        value: "timeGridWeek",
        label: "Time Grid Week",
      },
    ],
    list: [
      {
        key: "listDay",
        value: "listDay",
        label: "List Day",
      },
      {
        key: "listWeek",
        value: "listWeek",
        label: "List Week",
      },
      {
        key: "listMonth",
        value: "listMonth",
        label: "List Month",
      },
      {
        key: "listYear",
        value: "listYear",
        label: "List Year",
      },
    ],
  };

  return (
    <>
      {/* Calendar */}
      <div className="fullcalendar">
        <FullCalendar
          plugins={[
            dayGridPlugin,
            multiMonthPlugin,
            timeGridPlugin,
            listPlugin,
          ]}
          initialView={"dayGridMonth"}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right:
              "timeGridDay,timeGridWeek,dayGridMonth,multiMonthYear,multiMonth3",
          }}
          views={{
            multiMonth3: {
              type: "multiMonth",
              duration: { months: 3 },
              titleFormat: { month: "short", year: "numeric" },
              calendarHeaderFormat: { weekday: "short" },
            },
          }}
          //   initialView={"timeGridWeek"}
          //   initialDate="2024-12-10"
          //   editable={true}
          //   selectable={true}
          //   selectMirror={true}
          //   dayMaxEvents={true}
          weekends={true}
          //   events={[
          //     {
          //       title: "event 1",
          //       //   date: "2024-12-11",
          //       start: "2024-12-11T10:00:00",
          //       //   editable: true,
          //       end: "2024-12-14T11:00:00",
          //     },
          //     {
          //       title: "event 2",
          //       //   date: "2024-12-02",
          //       start: "2024-12-02T10:00:00",
          //       //   editable: true,
          //       end: "2024-12-05T09:34:00",
          //     },
          //     {
          //       title: "event 3",
          //       allDay: true,
          //       start: "2024-12-02T10:00:00",
          //       editable: true,
          //       end: "2024-12-02T11:00:00",
          //     },
          //   ]}
        />
      </div>
    </>
  );
}

export default CalendarComponent;
