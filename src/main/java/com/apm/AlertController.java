package com.apm;

//import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;
import com.fasterxml.jackson.core.JsonParseException;  
import com.fasterxml.jackson.databind.JsonMappingException;  
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.Random;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;


@RestController
@RequestMapping("/alert")
public class AlertController {

    @RequestMapping("/list")
    public @ResponseBody Map<String, Object> getAlerts() {
        String json = "{\"statistics\":{\"hardware\":{\"link\": {\"online\": 50,\"offline\": 1,\"recover\": 0},\"load\": {\"high\": 2,\"normal\": 2,\"recover\": 0}},\"software\": {\"link\": {\"online\": 56,\"offline\": 0,\"recover\": 2},\"load\": {\"high\": 1,\"normal\": 0,\"recover\": 1}}}}";
        Map<String, Object> result = this.jsonMapper(json);
        List<String> strList = new ArrayList();
        strList.add("{\"id\": \"1\",\"name\": \"Tomcat\",\"type\": \"软件\",\"level\": \"严重\",\"time\": \"2017-04-01 14:08:05\",\"log\": \"堆内存使用率超过阈值（90%）\"}");
        strList.add("{\"id\": \"2\",\"name\": \"采集机-1\",\"type\": \"硬件\",\"level\": \"严重\",\"time\": \"2017-04-01 14:08:05\",\"log\": \"内存利用率超过90%\"}");
        strList.add("{\"id\": \"3\",\"name\": \"采集机-2\",\"type\": \"硬件\",\"level\": \"严重\",\"time\": \"2017-04-01 14:08:05\",\"log\": \"设备脱网\"}");
        strList.add("{\"id\": \"4\",\"name\": \"应用服务器-2\",\"type\": \"硬件\",\"level\": \"一般\",\"time\": \"2017-04-01 14:08:05\",\"log\": \"磁盘空间/export利用率超过70%\"}");
        strList.add("{\"id\": \"5\",\"name\": \"数据库服务器\",\"type\": \"硬件\",\"level\": \"一般\",\"time\": \"2017-04-01 14:08:05\",\"log\": \"磁盘空间利用率超过70%\"}");
        strList.add("{\"id\": \"6\",\"name\": \"数据库服务器\",\"type\": \"硬件\",\"level\": \"恢复\",\"time\": \"2017-04-01 14:08:05\",\"log\": \"磁盘空间利用率超过70% 告警已恢复\"}");
        strList.add("{\"id\": \"7\",\"name\": \"Oracle\",\"type\": \"软件\",\"level\": \"一般\",\"time\": \"2017-04-01 14:08:05\",\"log\": \"Oracle TBA_TEMP 表空间利用率超过70%\"}");
        strList.add("{\"id\": \"8\",\"name\": \"Oracle\",\"type\": \"软件\",\"level\": \"一般\",\"time\": \"2017-04-01 14:08:05\",\"log\": \"Oracle TBA_ALRM 表空间利用率超过70%\"}");
        Map<String, Object> dataset = new HashMap();
        for (String item : strList) {
            Map<String, Object> dataItem =  this.jsonMapper(item);
            dataset.put((String)dataItem.get("id"), dataItem);
        }

        result.put("data", dataset);
        
        return result;
    }


    private Map<String, Object> jsonMapper(String json) {
   		Map<String, Object> result = null;
   		boolean isEmpty = (json == null || json.trim().length() == 0);
        if (!isEmpty) {
        	ObjectMapper mapper = new ObjectMapper();
        	try {
        		result = mapper.readValue(json, HashMap.class);
        	} catch (IOException e) {
            	e.printStackTrace();
        	}
        }
   		return result;
   	}

}