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
@RequestMapping("/res")
public class ResourceController {

    @RequestMapping("/default/server")
    public @ResponseBody Map<String, Object> defaultServer() {

        String item = "{\"resId\":\"1\", \"resName\":\"采集机-1\", \"groupName\":\"集中监控\", \"groupId\":\"1\"}";
        
        Map<String, Object> result = this.jsonMapper(item);
        
        return result;
    }


    @RequestMapping("/default/topo")
    public @ResponseBody Map<String, Object> defaultTopo() {

        String item = "{\"resId\":\"1\", \"resName\":\"集中监控网络拓扑\", \"groupName\":\"集中监控\", \"groupId\":\"1\"}";
        
        Map<String, Object> result = this.jsonMapper(item);
        
        return result;
    }

    @RequestMapping("/group/list")
    public @ResponseBody List<Map<String, Object>> groupList() {
    	List<Map<String, Object>> result = new ArrayList();
    	List<String> strList = new ArrayList();
	    strList.add("{\"id\":\"1\", \"name\":\"集中监控\"}");
        strList.add("{\"id\":\"2\", \"name\":\"IP综合网管\"}");
        strList.add("{\"id\":\"3\", \"name\":\"接入网网管\"}");
		
		for (String item : strList) {
			result.add(this.jsonMapper(item));
		}
    	
        return result;
    }

    @RequestMapping("/dev/list")
    public @ResponseBody List<Map<String, Object>> deviceList() {
        List<Map<String, Object>> result = new ArrayList();
        List<String> strList = new ArrayList();
        strList.add("{\"id\":\"1\", \"name\":\"采集机-1\", \"type\":\"server\", \"groupId\":\"1\"}");
        strList.add("{\"id\":\"2\", \"name\":\"采集机-2\", \"type\":\"server\", \"groupId\":\"1\"}");
        strList.add("{\"id\":\"3\", \"name\":\"数据库服务器\", \"type\":\"server\", \"groupId\":\"1\"}");
        strList.add("{\"id\":\"4\", \"name\":\"采集机-1\", \"type\":\"server\", \"groupId\":\"2\"}");
        strList.add("{\"id\":\"5\", \"name\":\"采集机-2\", \"type\":\"server\", \"groupId\":\"2\"}");
        strList.add("{\"id\":\"6\", \"name\":\"数据库服务器\", \"type\":\"server\", \"groupId\":\"2\"}");
        strList.add("{\"id\":\"7\", \"name\":\"采集机-1\", \"type\":\"server\", \"groupId\":\"3\"}");
        strList.add("{\"id\":\"8\", \"name\":\"采集机-2\", \"type\":\"server\", \"groupId\":\"3\"}");
        strList.add("{\"id\":\"9\", \"name\":\"数据库服务器\", \"type\":\"server\", \"groupId\":\"3\"}");
        
        for (String item : strList) {
            result.add(this.jsonMapper(item));
        }
        return result;
    }

    @RequestMapping("/serv/list")
    public @ResponseBody List<Map<String, Object>> serviceList() {
        List<Map<String, Object>> result = new ArrayList();
        List<String> strList = new ArrayList();
        strList.add("{\"id\":\"1\", \"name\":\"集中监控数据库\", \"type\":\"oracle\", \"groupId\":\"1\"}");
        strList.add("{\"id\":\"2\", \"name\":\"集中监控Tomcat\", \"type\":\"tomcat\", \"groupId\":\"1\"}");
        strList.add("{\"id\":\"3\", \"name\":\"IP网管数据库\", \"type\":\"oracle\", \"groupId\":\"2\"}");
        strList.add("{\"id\":\"4\", \"name\":\"IP网管Tomcat\", \"type\":\"tomcat\", \"groupId\":\"2\"}");
        strList.add("{\"id\":\"5\", \"name\":\"接入网网管数据库\", \"type\":\"oracle\", \"groupId\":\"3\"}");
        strList.add("{\"id\":\"6\", \"name\":\"接入网网管Tomcat\", \"type\":\"tomcat\", \"groupId\":\"3\"}");
        
        for (String item : strList) {
            result.add(this.jsonMapper(item));
        }
        return result;
    }

    @RequestMapping("/topo/list")
    public @ResponseBody List<Map<String, Object>> topoList() {
        List<Map<String, Object>> result = new ArrayList();
        List<String> strList = new ArrayList();
        strList.add("{ \"id\":\"1\", \"name\":\"集中监控\", \"type\": \"network\",\"groupId\":\"1\"}");
        strList.add("{ \"id\":\"2\", \"name\":\"OSS2.0接口\",\"type\": \"service\",\"groupId\":\"1\"}");
        strList.add("{ \"id\":\"3\", \"name\":\"告警处理\",\"type\": \"service\",\"groupId\":\"1\"}");
        strList.add("{ \"id\":\"4\", \"name\":\"接入网管网络拓扑\",\"type\": \"network\",\"groupId\":\"3\"}");
        strList.add("{ \"id\":\"5\", \"name\":\"电子工单流程\",\"type\": \"service\",\"groupId\":\"3\"}");
        
        for (String item : strList) {
            result.add(this.jsonMapper(item));
        }
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